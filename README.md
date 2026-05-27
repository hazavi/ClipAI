# ClipAI

An open-source, local-first AI image toolkit that runs entirely in the browser using ONNX Runtime Web.

---

## Overview

ClipAI is a privacy-focused image processing toolkit. All AI inference runs directly in your browser via WebAssembly. No data is uploaded, no server is involved, and no account is required.

---

## Features

- **Background Removal** - Fast and accurate on-device background removal with multiple model choices
- **Image Upscaling** - AI-powered 4x super-resolution with edge-preserving detail
- **Photo Colorization** - Deep learning colorization for black-and-white and sepia photographs
- **Batch Processing** - Process multiple images in a single queue
- **Model Caching** - Models are stored in IndexedDB for instant reuse across sessions
- **Offline Support** - Fully functional without internet after the initial model download
- **Multiple AI Models** - Choose from quantized or full-precision models based on your hardware

---

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 16 | Application framework |
| TypeScript | Type safety |
| ONNX Runtime Web | On-device AI inference via WebAssembly |
| shadcn/ui | UI component primitives |
| Tailwind CSS | Styling |
| IndexedDB | Local model caching |
| Serwist | Service worker and offline support |

---

## How It Works

1. Models are fetched from Hugging Face on first use
2. Inference runs via ONNX Runtime Web using WebAssembly
3. Models are cached locally in IndexedDB for reuse
4. All image data is processed in-memory and never transmitted

---

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm start
```

---

## Available Models

**Background Removal**
- ORMBG (Quantized / FP16)
- ISNet (Quantized / FP16)
- BiRefNet v2 Lite
- RMBG 1.4 (Quantized / FP16)
- MODNet (Quantized)

**Image Upscaling**
- Swin2SR x4 (Quantized / FP16)

**Photo Colorization**
- DeOldify Artistic (Quantized / FP16)

---

## Roadmap

- Photo restoration
- Image captioning
- Advanced mask editing tools
- Browser extension

---

## Contributing

Contributions, issues, and pull requests are welcome. Please open an issue before submitting large changes to discuss the approach.

---

## License

ClipAI is free software licensed under the GNU General Public License v3.0.

See [LICENSE](./LICENSE) for full terms or visit [https://www.gnu.org/licenses/](https://www.gnu.org/licenses/).

---

Built by [@yossthedev](https://yossthedev.github.io)

