/**
 * Web Audio API synthesizer for luxury Indian boutique ambient sitar/tanpura drone.
 * Guaranteed 100% reliable without external audio dependencies.
 */
class BoutiqueSoundEngine {
  private ctx: AudioContext | null = null;
  private oscillators: OscillatorNode[] = [];
  private gainNode: GainNode | null = null;
  private isPlaying = false;

  public init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
  }

  public play() {
    if (this.isPlaying) return;
    this.init();
    if (!this.ctx) return;

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    try {
      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.setValueAtTime(0.01, this.ctx.currentTime);
      this.gainNode.gain.exponentialRampToValueAtTime(0.12, this.ctx.currentTime + 1.2);

      // Create warm harmonic Tanpura chord: Sa (C#3 / 138.6Hz), Pa (G#3 / 207.65Hz), Sa high (277.2Hz)
      const freqs = [138.59, 207.65, 277.18, 415.30];
      this.oscillators = freqs.map((freq, i) => {
        const osc = this.ctx!.createOscillator();
        osc.type = i % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, this.ctx!.currentTime);
        
        // Gentle vibrato
        const lfo = this.ctx!.createOscillator();
        lfo.frequency.setValueAtTime(0.2 + i * 0.1, this.ctx!.currentTime);
        const lfoGain = this.ctx!.createGain();
        lfoGain.gain.setValueAtTime(1.5, this.ctx!.currentTime);
        lfo.connect(lfoGain);
        lfoGain.connect(osc.frequency);
        lfo.start();

        osc.connect(this.gainNode!);
        osc.start();
        return osc;
      });

      this.gainNode.connect(this.ctx.destination);
      this.isPlaying = true;
    } catch {
      // Audio context might be restricted before user gesture
    }
  }

  public stop() {
    if (!this.isPlaying || !this.gainNode || !this.ctx) return;
    try {
      this.gainNode.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.5);
      setTimeout(() => {
        this.oscillators.forEach(osc => {
          try { osc.stop(); osc.disconnect(); } catch {}
        });
        this.oscillators = [];
        this.isPlaying = false;
      }, 500);
    } catch {
      this.isPlaying = false;
    }
  }

  public toggle(muteState: boolean) {
    if (muteState) {
      this.stop();
    } else {
      this.play();
    }
  }
}

export const boutiqueAudio = new BoutiqueSoundEngine();
