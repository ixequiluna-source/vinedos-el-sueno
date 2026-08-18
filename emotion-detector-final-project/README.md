# Final Project – Emotion Detector

Final project for the **Python Project for AI & Application Development** course.

This project implements an AI-powered emotion detector using the Skills Network Watson NLP endpoint, packages the functionality as `EmotionDetection`, validates it with unit tests, and deploys a web interface with Flask.

## Project files

- `EmotionDetection/emotion_detection.py` – Watson NLP emotion detector
- `EmotionDetection/__init__.py` – package export
- `test_emotion_detection.py` – unit tests
- `server.py` – Flask web server
- `templates/index.html` – web interface
- `static/mywebscript.js` – browser request logic

## Run

```bash
pip install flask requests pylint
python server.py
```

## Test

```bash
python -m unittest test_emotion_detection.py
pylint server.py EmotionDetection/emotion_detection.py
```
