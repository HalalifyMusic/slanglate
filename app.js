// Slanglate - Main Application Logic
document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');
    const translateBtn = document.getElementById('translateBtn');
    const swapBtn = document.getElementById('swapBtn');
    const clearBtn = document.getElementById('clearBtn');
    const copyBtn = document.getElementById('copyBtn');
    const charCount = document.getElementById('charCount');
    const inputLabel = document.getElementById('inputLabel');
    const outputLabel = document.getElementById('outputLabel');
    const slangToEnglish = document.getElementById('slangToEnglish');
    const englishToSlang = document.getElementById('englishToSlang');
    const trendingChips = document.getElementById('trendingChips');
    const dictionaryGrid = document.getElementById('dictionaryGrid');
    const searchInput = document.getElementById('searchInput');
    const speakBtn = document.getElementById('speakBtn');
    const voiceBtn = document.getElementById('voiceBtn');
    const floatingEmojis = document.getElementById('floatingEmojis');
    const categoryFilters = document.getElementById('categoryFilters');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const historySection = document.getElementById('historySection');
    const historyList = document.getElementById('historyList');
    const clearHistoryBtn = document.getElementById('clearHistoryBtn');
    const termCount = document.getElementById('termCount');

    let isSlangToEnglish = true;
    let currentCategory = 'all';
    let displayedItems = 12;
    let translationHistory = JSON.parse(localStorage.getItem('slangHistory') || '[]');

    // Initialize floating emojis background
    function initFloatingEmojis() {
        const emojis = ['💯', '🔥', '💀', '😭', '🗣️', '✨', '🧢', '💅', '🥀', '😏', '💚', '🎀'];
        for (let i = 0; i < 15; i++) {
            const emoji = document.createElement('div');
            emoji.className = 'floating-emoji';
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.left = Math.random() * 100 + '%';
            emoji.style.top = Math.random() * 100 + '%';
            emoji.style.animationDelay = Math.random() * 20 + 's';
            emoji.style.animationDuration = (15 + Math.random() * 10) + 's';
            floatingEmojis.appendChild(emoji);
        }
    }

    // Initialize trending chips
    function initTrendingChips() {
        trendingChips.innerHTML = '';
        trendingSlang.forEach(item => {
            const chip = document.createElement('div');
            chip.className = 'trending-chip';
            chip.innerHTML = `<span class="chip-emoji">${item.emoji}</span><span>${item.term}</span>`;
            chip.addEventListener('click', () => {
                inputText.value = item.term;
                updateCharCount();
                performTranslation();
            });
            trendingChips.appendChild(chip);
        });
    }

    // Get filtered dictionary entries
    function getFilteredEntries(filter = '', category = 'all') {
        const lowerFilter = filter.toLowerCase();

        return Object.entries(slangDictionary)
            .filter(([term, data]) => {
                // Category filter
                if (category !== 'all') {
                    const hasCategory = data.tags.some(tag =>
                        tag.toLowerCase() === category.toLowerCase() ||
                        (category === 'trending' && (tag.includes('2024') || tag.includes('2023') || tag === 'trending'))
                    );
                    if (!hasCategory) return false;
                }

                // Search filter
                if (!filter) return true;
                return term.toLowerCase().includes(lowerFilter) ||
                    data.definition.toLowerCase().includes(lowerFilter) ||
                    data.tags.some(tag => tag.toLowerCase().includes(lowerFilter));
            });
    }

    // Initialize dictionary cards
    function initDictionary(filter = '', category = 'all', limit = 12) {
        dictionaryGrid.innerHTML = '';
        const entries = getFilteredEntries(filter, category);

        // Update term count
        termCount.textContent = `(${entries.length} terms)`;

        entries.slice(0, limit).forEach(([term, data]) => {
            const card = document.createElement('div');
            card.className = 'dictionary-card fade-in';
            card.innerHTML = `
                <div class="card-header">
                    <span class="slang-term">${term}</span>
                    <span class="card-emoji">${data.emoji}</span>
                </div>
                <p class="slang-definition">${data.definition}</p>
                <p class="slang-example">${data.example}</p>
                <div class="card-tags">
                    ${data.tags.map(tag => `<span class="card-tag" data-tag="${tag}">${tag}</span>`).join('')}
                </div>
            `;
            card.addEventListener('click', () => {
                inputText.value = term;
                updateCharCount();
                performTranslation();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            dictionaryGrid.appendChild(card);
        });

        // Show/hide load more button
        loadMoreBtn.style.display = entries.length > limit ? 'block' : 'none';
    }

    // Update character count
    function updateCharCount() {
        const count = inputText.value.length;
        charCount.textContent = count;
        if (count > 450) {
            charCount.style.color = '#f59e0b';
        } else if (count >= 500) {
            charCount.style.color = '#ef4444';
        } else {
            charCount.style.color = '';
        }
    }

    // Translate slang to English
    // Random slang generator
    function randomSlang() {
        const terms = Object.keys(slangDictionary);
        let randomTerm = terms[Math.floor(Math.random() * terms.length)];
        let phrase = "";
        
        // Sometimes make a longer sentence
        if (Math.random() > 0.5) {
            const openers = ["yo", "bro", "honestly", "ngl", "lowkey"];
            const opener = openers[Math.floor(Math.random() * openers.length)];
            phrase = `${opener} ${randomTerm} fr fr`;
        } else {
            phrase = `${randomTerm} is crazy`;
        }
        
        // Or just use the example from dictionary
        if (Math.random() > 0.3) {
            phrase = slangDictionary[randomTerm].example;
        }

        inputText.value = phrase;
        updateCharCount();
        performTranslation();
    }

    // Initialize Random Button
    const randomBtn = document.getElementById('randomBtn');
    if(randomBtn) randomBtn.addEventListener('click', randomSlang);

    // Translate slang to English
    function translateSlangToEnglish(text) {
        if (!text.trim()) return '';
        
        let result = text;
        const foundTerms = [];
        const replacements = [];
        
        // Sort by length (longest first) to match longer phrases before shorter ones
        const sortedTerms = Object.keys(slangDictionary).sort((a, b) => b.length - a.length);

        // First pass: find all matches and store them
        sortedTerms.forEach(term => {
            const regex = new RegExp(`\\b${escapeRegex(term)}\\b`, 'gi');
            let match;
            while ((match = regex.exec(text)) !== null) {
                // Check if this position overlaps with existing replacements
                const overlaps = replacements.some(r =>
                    (match.index >= r.start && match.index < r.end) ||
                    (match.index + match[0].length > r.start && match.index + match[0].length <= r.end)
                );
                if (!overlaps) {
                    const data = slangDictionary[term];
                    replacements.push({
                        start: match.index,
                        end: match.index + match[0].length,
                        original: match[0],
                        replacement: data.reverse[0],
                        definition: data.definition.replace(/"/g, "'")
                    });
                    foundTerms.push({ term, definition: data.definition });
                }
            }
        });

        // Sort replacements by position (reverse order for safe replacement)
        replacements.sort((a, b) => b.start - a.start);

        // Second pass: apply replacements from end to start
        result = text;
        replacements.forEach(r => {
            const highlighted = `<span class="highlight-word" title="${r.definition}">${r.replacement}</span>`;
            result = result.substring(0, r.start) + highlighted + result.substring(r.end);
        });

        if (foundTerms.length === 0) {
            return `<span class="translated-text">${text}</span><br><br><em style="color: var(--text-muted);">No slang detected. Try words like: rizz, lowkey, no cap, bussin, etc.</em>`;
        }

        return `<span class="translated-text">${result}</span>`;
    }

    // Translate English to slang
    function translateEnglishToSlang(text) {
        if (!text.trim()) return '';

        let result = text;
        const foundTerms = [];

        // Check each slang term's reverse translations
        Object.entries(slangDictionary).forEach(([slangTerm, data]) => {
            data.reverse.forEach(englishPhrase => {
                const regex = new RegExp(`\\b${escapeRegex(englishPhrase)}\\b`, 'gi');
                if (regex.test(result)) {
                    result = result.replace(regex, `<span class="highlight-word" title="${data.definition}">${slangTerm}</span>`);
                    foundTerms.push({ term: slangTerm, definition: data.definition });
                }
            });
        });

        if (foundTerms.length === 0) {
            return `<span class="translated-text">${text}</span><br><br><em style="color: var(--text-muted);">Try phrases like: "no lie", "really good", "suspicious", "for real", etc.</em>`;
        }

        return `<span class="translated-text">${result}</span>`;
    }

    // Escape special regex characters
    function escapeRegex(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    // Add to history
    function addToHistory(original, translated, direction) {
        const historyItem = {
            original: original.substring(0, 100),
            translated: translated.replace(/<[^>]*>/g, '').substring(0, 100),
            direction: direction,
            time: new Date().toISOString()
        };

        translationHistory.unshift(historyItem);
        if (translationHistory.length > 10) {
            translationHistory = translationHistory.slice(0, 10);
        }

        localStorage.setItem('slangHistory', JSON.stringify(translationHistory));
        renderHistory();
    }

    // Render history
    function renderHistory() {
        if (translationHistory.length === 0) {
            historySection.style.display = 'none';
            return;
        }

        historySection.style.display = 'block';
        historyList.innerHTML = '';

        translationHistory.forEach((item, index) => {
            const historyEl = document.createElement('div');
            historyEl.className = 'history-item';
            const timeAgo = getTimeAgo(new Date(item.time));
            historyEl.innerHTML = `
                <span class="history-direction">${item.direction === 'slang-to-english' ? '🧢→📖' : '📖→🧢'}</span>
                <div class="history-content">
                    <div class="history-original">${item.original}</div>
                    <div class="history-translated">${item.translated}</div>
                </div>
                <span class="history-time">${timeAgo}</span>
            `;
            historyEl.addEventListener('click', () => {
                inputText.value = item.original;
                updateCharCount();
                performTranslation();
            });
            historyList.appendChild(historyEl);
        });
    }

    // Get relative time
    function getTimeAgo(date) {
        const seconds = Math.floor((new Date() - date) / 1000);
        if (seconds < 60) return 'just now';
        if (seconds < 3600) return Math.floor(seconds / 60) + 'm ago';
        if (seconds < 86400) return Math.floor(seconds / 3600) + 'h ago';
        return Math.floor(seconds / 86400) + 'd ago';
    }

    // Perform translation
    function performTranslation() {
        const text = inputText.value.trim();

        if (!text) {
            outputText.innerHTML = '<span class="placeholder-text">Translation will appear here...</span>';
            return;
        }

        // Add loading state
        translateBtn.disabled = true;
        translateBtn.innerHTML = '<span class="btn-text">Translating...</span><span class="btn-icon">⏳</span>';

        // Simulate slight delay for UX
        setTimeout(() => {
            let translatedText;
            if (isSlangToEnglish) {
                translatedText = translateSlangToEnglish(text);
                addToHistory(text, translatedText, 'slang-to-english');
            } else {
                translatedText = translateEnglishToSlang(text);
                addToHistory(text, translatedText, 'english-to-slang');
            }

            outputText.innerHTML = translatedText;
            outputText.classList.add('fade-in');

            translateBtn.disabled = false;
            translateBtn.innerHTML = '<span class="btn-text">Translate</span><span class="btn-icon">✨</span>';
        }, 300);
    }

    // Swap languages
    function swapLanguages() {
        isSlangToEnglish = !isSlangToEnglish;

        if (isSlangToEnglish) {
            slangToEnglish.classList.add('active');
            englishToSlang.classList.remove('active');
            inputLabel.textContent = 'Enter Slang';
            outputLabel.textContent = 'Translation';
            inputText.placeholder = "Type slang here... (e.g., 'no cap that's lowkey fire fr fr')";
        } else {
            slangToEnglish.classList.remove('active');
            englishToSlang.classList.add('active');
            inputLabel.textContent = 'Enter English';
            outputLabel.textContent = 'Slang Translation';
            inputText.placeholder = "Type normal English... (e.g., 'that's really good for real')";
        }

        // Swap the text if there's content
        const currentOutput = outputText.textContent;
        if (currentOutput && !currentOutput.includes('Translation will appear') && !currentOutput.includes('No slang detected') && !currentOutput.includes('Try phrases')) {
            inputText.value = currentOutput;
            updateCharCount();
        }

        outputText.innerHTML = '<span class="placeholder-text">Translation will appear here...</span>';
    }

    // Copy to clipboard
    function copyToClipboard() {
        const text = outputText.textContent;
        if (text && !text.includes('Translation will appear')) {
            navigator.clipboard.writeText(text).then(() => {
                showToast('✅', 'Copied to clipboard!');
                copyBtn.innerHTML = `
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span class="copy-text">Copied!</span>
                `;
                setTimeout(() => {
                    copyBtn.innerHTML = `
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                        </svg>
                        <span class="copy-text">Copy</span>
                    `;
                }, 2000);
            });
        }
    }

    // Clear input
    function clearInput() {
        inputText.value = '';
        outputText.innerHTML = '<span class="placeholder-text">Translation will appear here...</span>';
        updateCharCount();
        inputText.focus();
    }

    // Show toast notification
    function showToast(icon, message) {
        let toast = document.querySelector('.toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.className = 'toast';
            document.body.appendChild(toast);
        }
        toast.innerHTML = `<span class="toast-icon">${icon}</span>${message}`;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2500);
    }

    // Text-to-speech
    function speakText() {
        const text = outputText.textContent;
        if (text && !text.includes('Translation will appear') && 'speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = 0.9;
            speechSynthesis.speak(utterance);
        }
    }

    // Voice input
    function startVoiceInput() {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            const recognition = new SpeechRecognition();
            recognition.lang = 'en-US';
            recognition.interimResults = false;

            recognition.onstart = () => {
                voiceBtn.style.color = '#ef4444';
                showToast('🎤', 'Listening...');
            };

            recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                inputText.value = transcript;
                updateCharCount();
                performTranslation();
            };

            recognition.onerror = () => {
                showToast('❌', 'Voice input failed');
            };

            recognition.onend = () => {
                voiceBtn.style.color = '';
            };

            recognition.start();
        } else {
            showToast('❌', 'Voice input not supported');
        }
    }

    // Event Listeners
    translateBtn.addEventListener('click', performTranslation);
    swapBtn.addEventListener('click', swapLanguages);
    clearBtn.addEventListener('click', clearInput);
    copyBtn.addEventListener('click', copyToClipboard);
    speakBtn.addEventListener('click', speakText);
    voiceBtn.addEventListener('click', startVoiceInput);

    inputText.addEventListener('input', updateCharCount);
    inputText.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            performTranslation();
        }
    });

    slangToEnglish.addEventListener('click', () => {
        if (!isSlangToEnglish) swapLanguages();
    });

    englishToSlang.addEventListener('click', () => {
        if (isSlangToEnglish) swapLanguages();
    });

    searchInput.addEventListener('input', (e) => {
        displayedItems = 12;
        initDictionary(e.target.value, currentCategory, displayedItems);
    });

    // Category filter listeners
    categoryFilters.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            currentCategory = e.target.dataset.category;
            displayedItems = 12;
            initDictionary(searchInput.value, currentCategory, displayedItems);
        }
    });

    // Load more button
    loadMoreBtn.addEventListener('click', () => {
        displayedItems += 12;
        initDictionary(searchInput.value, currentCategory, displayedItems);
    });

    // Clear history
    clearHistoryBtn.addEventListener('click', () => {
        translationHistory = [];
        localStorage.removeItem('slangHistory');
        renderHistory();
        showToast('🗑️', 'History cleared');
    });

    // Limit input length
    inputText.addEventListener('input', () => {
        if (inputText.value.length > 500) {
            inputText.value = inputText.value.slice(0, 500);
        }
    });

    // Initialize
    initFloatingEmojis();
    initTrendingChips();
    initDictionary();
    renderHistory();
});
