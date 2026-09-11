# Multimedia Engineering — Lecture 2: Introduction to multimedia engineering

Seowon Ji, School of Computer Science and Engineering (seowonji@konkuk.ac.kr)
Lecture 02, 2026-Fall

## Agenda

1. Course overview (revisit)
2. Multimedia: Characteristics
3. Multimedia: Applications
4. Multimedia: Fundamentals

---

## 1. Course overview (revisit)

### Grading policy

| Subject | Score | Description |
|---|---|---|
| Attendance | 10 | Absence: -1 / Lateness: -0.5 <br> ★ Cheating (leaving after attendance check, proxy attendance): -5 |
| Midterm | 35 | Missing the exam: F |
| Final | 35 | Missing the exam: F |
| Assignment | 20 (Assignment+Quiz 합산) | Detailed scores for assignments and quizzes are subject to change. Quizzes may be given without prior notice as pop-up quizzes |
| Quiz | | |

※ Receiving a score of 0 in any one of attendance, the midterm, or the final exam will result in an F grade.

### What is Multimedia?

- "Multi" + "media" = Multiple forms of media integrated together
- What can 'media' include? (text, image, audio, video, animation 등)
- Example: A YouTube video contains text, image, audio, video, animation 등 여러 미디어 요소

### Components of Multimedia & Relevance

**Core components of multimedia**
- (Before image, video, audio, and interaction, what comes first? → **Text**)
- Image
- Video
- Audio
- Interaction

**Relevance in real-world tech**
- Photo, Video capturing & Audio recording
- Photo, Video & Audio sharing
- Video streaming (OTT services)
- Video conferencing (Zoom, Google Meet, ...)

---

## 2. Multimedia: Characteristics

### What is Multimedia? The Core Concepts

- **Defined by the Convergence of Media**: A seamless blend of *text, images, audio, video, and animation* into a single, integrated experience
- **Powered by the Integration of Technologies**: Relies on the synergy between diverse fields like
  1. Computing
  2. Telecommunications
  3. Electronics
  4. Optics
  5. Broadcasting, and …

### The Digital Revolution: Web & Interactivity

- **Growth of the Web (1990s)**: The rise of the internet created a massive global demand for rich, engaging multimedia content.
- **Development into Interactive Media Experiences**: Shifted from passive consumption to user-driven, responsive content that allows for active participation.

### The Engineering Challenge: Managing Data

- **The Problem**: Rapid Growth of Media File Sizes — High-quality audio, video, and image result in extremely large data files.
- **The Consequence**: High Bandwidth & Storage Demands — This drives the continuous need for innovation in communication networks and data storage systems.
- **The Solution**: Advancements in Compression Technologies — Compression became essential for making data manageable, enabling efficient storage and real-time transmission.

---

## 3. Multimedia: Applications

### How Multimedia Shapes Our Daily Lives and Future

**Multimedia in Entertainment & Daily Life**
- Redefining Our Media Consumption: From traditional TV and Broadcasting to on-demand Internet Broadcasting like IPTV, multimedia is how we get our news and entertainment.
- Powering Our Personal Devices: Modern life runs on multimedia, embedded in everything from our Mobile Phones to specialized Multimedia Devices.
- Driving the World of Gaming: Provides the rich, interactive graphics and sound that define both Online and Offline Gaming experiences.

**Multimedia in Knowledge & Education**
- Transforming How We Learn: Online Education is now mainstream, with Cyber Universities and Internet-based Lectures making learning accessible to all.
- Preserving and Sharing Culture: Digital Libraries and Digital Museums use multimedia to create immersive archives of human knowledge and art.

**Multimedia in Advanced & Future Technologies**
- Innovating in Medical Services: Remote Healthcare uses multimedia to monitor patients and deliver care remotely.
- Building New Realities with eXtended Reality (XR: Virtual Reality/Augmented Reality/Mixed Reality를 아우르는 개념): Immersive technologies used to create new digital experiences.

---

## 4. Multimedia: Fundamentals

### The Foundation: International Standards

- **What is a Standard?**: A formal document, established by consensus, that provides rules and guidelines to ensure reliability and interoperability for **COMMON USE**.
- **De Jure Standards**: Officially established by recognized standardization bodies.
  - Examples: ISO (International Organization for Standardization, 국제표준화기구), IEC (for Electrotechnical), ITU (for Telecommunication)
- **De Facto Standards**: Become standards through market dominance or widespread use.
  - Examples: IEEE standards, Microsoft Windows

### Media Type 1: Text — The ASCII Standard (American Standard Code for Information Interchange)

- **The Original Standard: ASCII Code** — A foundational character encoding standard, originally from ANSI (American National Standards Institute) and later adopted by ISO.
- **How It Works: Character Encoding** — Based on a 7-bit scheme to represent 128 characters, including English letters, digits, and symbols, often stored in 8 bits.
- **Ensuring Reliability: Error Detection** — An 8th "parity bit" is frequently added to the 7-bit code to detect errors during data transmission.

### Text Evolution: Unicode & Hypertext

- **The Limitation of ASCII**: It was insufficient for representing the vast number of characters in languages outside the English-speaking world.
- **The Solution: Unicode** (ex. UTF-8 = Unicode Transformation Format - 8-bit) — A universal standard developed to represent all languages and scripts, standardized as ISO/IEC 10646.
- **Structuring Content: HyperText Markup Language (HTML)** — Markup defines the logical structure of a document, while Hypertext creates the links that connect them, forming the basis of the web.

### Text Comparison

| Category | ASCII | Unicode | Hypertext |
|---|---|---|---|
| Type | Character encoding (English only) | Character encoding (all world scripts) | Document representation (link-based) |
| Bit Size | 7-bit (128 chars) | Variable-length | Works on top of character sets |
| Purpose | Transmit English letters/numbers | Integrate all languages | Connect and navigate information |

### Media Type 2: Sound (Audio)

- **The Components of Sound in Multimedia**: Typically composed of three elements: Music, ambient Sound Effects, and human Speech.
- **The Science of Sound: Waveform Data**: Digitally, sound is represented as a waveform, defined by its Frequency (pitch) and Amplitude (volume).
- **Common Sound Formats and Standards**: Key standards include MPEG-1 Audio Layer 3 (MP3) — Music, Dolby AC-3 — Movie/Broadcasting, and the instrument-focused MIDI standard — Music production.

### Media Type 3: Image (Bitmap)

- **The Building Block of Images: Pixels** — Bitmap-based images store color and brightness information for every single pixel (picture element).
- **The Data Challenge** — As the image size or resolution increases, the number of pixels grows, leading to a direct increase in file size.
- **Common Bitmap Formats** — Well-known formats include BMP (from Microsoft) and the widely used JPEG (an ISO standard for compression).

**BMP vs. JPEG**

| Category | BMP | JPEG |
|---|---|---|
| Developer | Microsoft | ISO/IEC JTC 1 (Joint Technical Committee) |
| Type | De Facto standard (industry practice) | De Jure standard (official international standard) |
| Features | Almost no compression, large file size | Lossy compression, efficient file size |
| Usage | Default Windows format, high compatibility | Widely used on Web, cameras, mobile devices |
| Standard Status | Not an international standard | Formal standard: ISO/IEC 10918-1 |

### Media Type 4: Graphics (Vector)

- **An Alternative to Pixels: Mathematical Descriptions** — Vector graphics store images using mathematical equations for lines, curves, and shapes, not pixels.
- **The Advantage of Scalability** — The amount of data is independent of the image size, meaning graphics can be scaled infinitely without losing quality.
- **How Data is Measured** — File size increases with graphical complexity (more shapes and curves), not with the display size. A common example is Flash, SVG, Illustrator file.
- Bitmap (pixels) vs. Vector graphic: bitmap 확대 시 계단현상(픽셀 깨짐)이 나타나지만 vector는 확대해도 매끄럽게 유지됨.

### Media Type 5: Animation

- **Creating the Illusion of Movement** — Animation is fundamentally a rapid sequence of images, created with computer graphics or traditional drawings.
- **Bringing Interactivity to Motion** — Modern animations often respond to user input, enhancing engagement and creating dynamic experiences.
- **Common Animation Formats** — Includes simple Animated GIFs, standard video files, and immersive 3D formats like VRML (an ISO standard).

### Media Type 6: Video

- **The Most Data-Intensive Medium** — Video is a sequence of moving images, requiring at least 15 frames per second (fps) for the human eye to perceive smooth motion. (Film: ~24 fps, TV: 25-30 fps or more)
- **The Challenge: Massive Data Volume** — Due to its high information density, video requires significant storage and processing power.
- **Key Video Standards and Formats** — Dominated by major international standards like MPEG (from ISO) and the H.26x series (from ITU).

### Media Type 5 & 6: Animation, Video & Hybrid form

The boundary between animation and video is becoming increasingly blurred.

| Category | Animation | Hybrid (Animation + Video) | Video |
|---|---|---|---|
| Data Source | Drawings, 2D/3D graphics, computer modeling | Combination of real footage and CGI/animation | Camera capture of the real world |
| Strengths | Unlimited expression, exaggeration possible | Expands visual possibilities, immersive realism with creative control | Realism, authenticity |
| Examples | Disney animation, Pixar 3D, GIFs | *Avatar*, *The Lion King* (2019 remake), Marvel movies | Movies, TV dramas, smartphone videos |

### The Engineering Problem: A Data Size Comparison

- **The Data Size Comparison**: Text < Sound < Image < Video / Animation
- **Example) Still Image**: A single 12 Megapixel photo (RGB color) requires about 36 MB of uncompressed data.
  - 4,000 x 3,000 = 12,000,000 pixels (12M)
  - 12,000,000 pixels × 3 channel (RGB information) × 8 Bit = 36 MB
- **Example) Video**: Just one minute of uncompressed Full HD video (1080p at 30fps) requires approximately ___ GB of data. (Do it yourself! — Assignment 01, detailed description will be uploaded at eCampus)

### The Solution: Compression Technologies

- **Why Compression is Essential** — Without compression, storing and transmitting high-quality multimedia files would be impractical.
- **Common Image Compression Formats** — Includes GIF and PNG (lossless, for graphics) and JPEG (lossy, for photographs).
- **Major Video Compression Standards** — The most important standards are the MPEG series (1, 2, 4) and the H.26x series (H.264/AVC).

### The Big Picture: Digital Media

- **What is Digital Media?** — It's the replacement of analog signals with digital formats, allowing content to be created, stored, and processed by computers.
- **The Advantages of Going Digital**
  - Permanent Preservation: No signal degradation over time.
  - Ease of Use: Simple to store, transmit, process, and combine.
- **Two Core Types of Digital Media**
  - Static Media: Text, Images, and Graphics.
  - Dynamic Media: Sound, Video, and Animation.

---

*End of Lecture 2*
