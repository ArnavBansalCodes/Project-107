function startClasssification() {
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}