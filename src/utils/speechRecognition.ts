// Helper for Speech Recognition & Audio Recording in browser

export interface SpeechRecognitionHelper {
  start: (onResult: (text: string) => void, onError: (err: any) => void) => void;
  stop: () => void;
  isSupported: boolean;
}

export function getSpeechRecognition(): SpeechRecognitionHelper {
  const SpeechRecognition =
    (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

  if (!SpeechRecognition) {
    return {
      isSupported: false,
      start: () => {},
      stop: () => {},
    };
  }

  let recognitionInstance: any = null;

  return {
    isSupported: true,
    start: (onResult, onError) => {
      try {
        recognitionInstance = new SpeechRecognition();
        recognitionInstance.lang = 'id-ID';
        recognitionInstance.continuous = true;
        recognitionInstance.interimResults = true;

        recognitionInstance.onresult = (event: any) => {
          let transcript = '';
          for (let i = 0; i < event.results.length; i++) {
            transcript += event.results[i][0].transcript + ' ';
          }
          onResult(transcript.trim());
        };

        recognitionInstance.onerror = (event: any) => {
          console.warn('Speech recognition error:', event.error);
          onError(event);
        };

        recognitionInstance.start();
      } catch (err) {
        onError(err);
      }
    },
    stop: () => {
      if (recognitionInstance) {
        try {
          recognitionInstance.stop();
        } catch {}
        recognitionInstance = null;
      }
    },
  };
}
