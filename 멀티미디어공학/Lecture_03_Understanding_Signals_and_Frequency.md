# Multimedia Engineering — Lecture 3: Understanding Signals and Frequency

Seowon Ji, School of Computer Science and Engineering (seowonji@konkuk.ac.kr)
Lecture 03, 2026-Fall

## Agenda

1. Review: INTL Standards and Media Types
2. Understanding and Digitizing Signals
3. Principles of Frequency Analysis
4. Example: Theory into Practice

---

## 1. Review: INTL Standards and Media Types

### The Foundation: International Standards

- **What is a Standard?**: A formal document, established by consensus, that provides rules and guidelines to ensure reliability and interoperability for **COMMON USE**.
- **De Jure Standards**: Officially established by recognized standardization bodies.
  - Examples: ISO (International Organization for Standardization, 국제표준화기구), IEC (for Electrotechnical), ITU (for Telecommunication)
- **De Facto Standards**: Become standards through market dominance or widespread use.
  - Examples: IEEE standards, Microsoft Windows

### Foundational Media Types (1)

- **Text: From Simple Code to Global Standard**
  - Text encoding evolved from ASCII, which was limited to ___(English letters/128 characters)___, to Unicode, the universal standard that supports ___(all languages and scripts)___.
  - Markup Languages like HTML are then used to give this text logical structure and create hypertext links.
- **Image: The Set of Pixels (Bitmap)**
  - Bitmap images are composed of a grid of individual ___(pixels)___ (picture elements).
  - Their core characteristic is that file size is directly proportional to ___(image size/resolution, i.e. number of pixels)___, making compression standards like JPEG essential.

### Foundational Media Types (2)

- **Video: Creating the Illusion of Motion**
  - Video is a rapid sequence of still images, or frames, typically played at 24-60 ___(frames per second, fps)___ to create smooth motion.
  - This process generates a massive volume of data, which makes compression the single most important challenge for video.
- **The Common Challenge: Managing Data Size**
  - As media becomes richer, from text to images, and especially to video, the amount of data grows exponentially.
  - Therefore, industry compression standards (like JPEG for images and MPEG/H.26x for video) are what make modern multimedia practical.

---

## 2. Understanding and Digitizing Signals

### What is a Signal?

- **The Traditional Definition**
  - Historically, a "signal" referred to electrical or radio waves.
  - Typically, we analyze signals as a change in magnitude over a single dimension, which is usually time.
  - Examples: Communication signals, audio from speech and music, or data from various sensors.
- **Expanding the Definition to a Second Dimension**
  - We can extend this concept from a 1D time axis to a 2D spatial domain.
  - This is how we define an image signal, where magnitude represents a change in brightness over a spatial area.

### Visualizing Signals: Audio vs. Image

- **The Audio Signal**: Represented on two axes — 1) Time, 2) Amplitude. It's a classic example of a 1D signal, showing how amplitude changes over time.
- **The Image Signal**: Represented in three dimensions — a 2D plane (x and y axes) and a z-axis representing the signal's magnitude, or brightness.
- **The Underlying Similarity**: If you extract a single horizontal line from an image, you get a 1D signal showing brightness changes along the x-axis — this looks just like an audio signal. This means many principles of 1D signal processing can be extended to 2D image processing.

### How We Classify Signals

**The Four Main Categories** — signals can be classified based on their characteristics in the time and amplitude domains:
- Analog Signal
- Continuous-Time Signal
- Discrete-Time Signal
- Digital Signal

**The Analog Signal**
- Continuous in Both Time and Amplitude: an analog signal is defined at every single point in time; its amplitude can take on any value within a continuous range.
- Key Characteristic: Smoothness — mathematically, this means the signal is continuous and differentiable at every moment. Most natural signals, like sound waves, are analog.

**Continuous-Time vs. Discrete-Time**
- **Continuous-Time Signal**: A broader category where a signal is defined at all points in time. Its amplitude could be continuous or limited to a finite set of values.
- **Discrete-Time Signal**: This type of signal is defined only at specific, distinct moments in time. It can be represented as a number sequence, denoted as
  x = {x(n)}, |n| < ∞
  When this signal represents a sampled analog wave, we can formally model it as a train of impulses using the **impulse (delta)** function:
  x*(t) = Σ (n=-∞ to ∞) x(n)δ(t−n)
  where δ(t) = 0 for all t ≠ 0 and ∫(−∞ to ∞) δ(t) dt = 1

**The Digital Signal**
- Discrete in Both Time and Amplitude: a digital signal is discontinuous in both the time and amplitude domains. It is defined only at specific points in time, and its amplitude can only be one of a finite, predetermined set of values.
- From Nature to Computing: to process real-world analog signals with a computer, we must convert them. This process is called Analog-to-Digital Conversion (ADC), or simply Digitization.

### Signal Classification: A Comparison

| Signal Type | Time Domain | Amplitude Domain | Key Characteristic / Example |
|---|---|---|---|
| Analog Signal | Continuous | Continuous | A true representation of a physical signal, like a sound wave. |
| Continuous-Time | Continuous | Continuous or discrete | Defined at every moment in time, but amplitude may have discrete levels. |
| Discrete-Time | Discrete | Continuous or discrete | Exists only at specific time instances. This is the result of sampling. |
| Digital Signal | Discrete | Discrete | The language of computers. The result of sampling and quantization. |

### The Bridge: How Analog becomes Digital (ADC) (↔ DAC)

- **The Two-Step Process of Digitization (1D Signal)**: To convert a continuous analog signal into a digital signal, we perform two critical steps: **Sampling** and **Quantization**.
- **Step 1: Sampling (in Time)**: We measure the analog signal's amplitude at discrete, regular intervals in time. The rate of this sampling (the sampling frequency) is crucial and must be at least twice the highest frequency in the signal, according to the **Nyquist (Sampling) Theorem**.
- **Step 2: Quantization (in Amplitude)**: We map the continuous amplitude of each sample to the closest value from a finite set of discrete levels. The number of levels is determined by the bit depth (e.g., 16-bit audio), which defines the signal's precision.

---

## 3. Principles of Frequency Analysis

### Introduction to the Frequency Domain

- **Simple vs. Complex Waves**
  - Sinusoidal Wave: A simple periodic wave that can be described by a **single sine (or cosine)** function. It is expressed as:
    y(t) = A sin(2πft + θ), where A is Amplitude, f is Frequency, and θ is Phase.
  - Complex Wave: A waveform that **cannot** be described by a single sine function.
- **Moving Beyond the Time Domain**: To truly understand a signal, we must analyze its frequency components.
  - ex) Image Signal Analysis: an input image can be decomposed into a Low Frequency Image Signal (blurred, overall shape/shading) and a High Frequency Image Signal (edges, fine detail).

### Signal in Frequency Domain: Fourier Theorem

- **The Fundamental Idea**: The Fourier Theorem states that any **PERIODIC** waveform can be **expressed** as the sum of simple sinusoidal waves with different amplitudes, frequencies, and phases.
  y(t) = A sin(2πft + θ)
- **The Components of a Signal**
  - Fundamental Wave: The sine wave with the lowest frequency in the spectrum.
  - Harmonics: The other sine waves in the spectrum, whose frequencies are integer multiples of the fundamental frequency.
  - Spectrum: The set of sine waves that make up the complex wave.

### A Key Mathematical Tool: Euler's Formula

- **Connecting Trigonometry and Exponentials**: Euler's formula is crucial for Fourier analysis because it links trigonometric functions to the complex exponential function.
  e^(jθ) = cos θ + j sin θ
- **What Each Term Means**:
  - e is Euler's number, the base of the natural logarithm.
  - j is the imaginary unit, where j² = −1.
  - θ is a real number representing an angle in radians.
  - e^(jθ) represents a **point on the unit circle (a rotation)** in the complex space.
- **Why It's Essential for DSP**: It allows us to represent oscillating signals (sines and cosines) as **complex exponentials**. This simplifies the mathematics of Fourier analysis by combining **amplitude and phase** into a single complex number.

### Analyzing Periodic Signals: The Fourier Series

- **The Goal of the Fourier Series**: To decompose a PERIODIC function x_p(t) with a period of L seconds into a sum of sinusoids.
- **The Synthesis Formula**:
  x_p(t) = Σ (n=−∞ to ∞) c_n e^(jnω₀t)
  - c_n are the Fourier coefficients — they tell us the amplitude and phase of each frequency component.
  - ω₀ = 2π/L is the fundamental angular frequency.

### Finding the Components: The Analysis Formula

- **Calculating the Fourier Coefficients, c_n**: We can find each coefficient c_n by using the analysis formula, which relies on the orthogonality of exponential functions.
  c_n = (1/L) ∫_L x_p(t) e^(−jnω₀t) dt, |n| < ∞
- **The Limitation of the Fourier Series**: This method has one major requirement — the signal **must be periodic**. This makes it difficult to apply to most real-world, **non-periodic (aperiodic)** signals.

### From Periodic to Aperiodic: The Fourier Transform

- **The Conceptual Leap**: What happens if we take a periodic signal and let its period L approach infinity? The signal effectively becomes **non-periodic (aperiodic)**.
- **The Mathematical Transition**: As L → ∞, the discrete frequency steps (nω₀) become a continuous frequency variable (ω). This transforms the Fourier Series sum into an integral, which brings us to the Fourier Transform.

### The Fourier Transform

- **The Tool for All Signals**: The Fourier Transform decomposes a function of time, x(t), into the frequencies that make it up, represented by X(ω).
- **The Forward Transform: Time to Frequency**: This formula allows us to analyze the frequency characteristics of any signal, not just periodic ones.
  X(ω) = ∫ (−∞ to ∞) x(t) e^(−jωt) dt
- **The Inverse Transform: Frequency to Time**: (converts the frequency-domain representation X(ω) back into the time-domain signal x(t))

### Summary: Series vs. Transform

**Fourier Series**
- Applies to: Periodic Signals
- Spectrum: Discrete (Consists of harmonics at integer multiples of ω₀)
- Math: Summation (Σ)

**Fourier Transform**
- Applies to: Aperiodic (Non-Periodic) Signals
- Spectrum: Continuous (Defined for all frequencies, ω)
- Math: Integral (∫)

---

## 4. Example: Theory into Practice

### ADC process: Image Acquisition (CMOS Sensor)

1. **Input: Analog Light Signal** — A real-world scene emits or reflects light, which is a continuous analog physical signal.
2. **Analog-to-Digital Conversion (ADC) by CMOS Sensor** — Light hits the CMOS sensor, which is an array of individual pixels. Each photosite converts the analog light intensity into an analog electrical charge. An on-chip ADC circuit then **samples** this analog charge spatially at each pixel location and **quantizes** its continuous value into a finite digital representation (e.g., an 8-bit value from 0 to 255 for brightness).
3. **Digital Image Output** — The result is a digital image, composed of discrete pixel values, ready for further digital processing (e.g., enhancement, compression).

### Tying It All Together: A Basic DSP Workflow (Audio EQ)

1. **Input: Analog Signal** — We start with a real-world analog audio signal from a microphone.
2. **Digitization (ADC)** — The signal is sampled and quantized to create a digital signal that a computer can process.
3. **Analysis (Fourier Transform)** — We apply the Fourier Transform to see the signal's frequency spectrum (e.g., how much bass, mid, and treble it has).
4. **Processing** — This is the "Digital Signal Processing" step. We manipulate the frequency spectrum, for example, by boosting the bass frequencies.
5. **Synthesis & Output** — We apply the Inverse Fourier Transform to the modified spectrum to get a new digital signal in the time domain. This is then converted back to an analog signal (DAC) to be played on speakers.

---

*End of Lecture 3*
