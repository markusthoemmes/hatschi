async function predict() {
  let recognizer = speechCommands.create('BROWSER_FFT');
  await recognizer.ensureModelLoaded();
  document.querySelector('#prediction').textContent = 'Modell geladen';

  // Array of words that the recognizer is trained to recognize.
  const words = recognizer.wordLabels();
  recognizer.listen(({scores}) => {
    // Turn scores into a list of (score,word) pairs.
    scores = Array.from(scores).map((s, i) => ({score: s, word: words[i]}));
    // Find the most probable word.
    scores.sort((s1, s2) => s2.score - s1.score);
    document.querySelector('#prediction').textContent = 'Ich glaube du has "' + scores[0].word + '" gesagt.';
  }, {probabilityThreshold: 0.75});
}
predict();