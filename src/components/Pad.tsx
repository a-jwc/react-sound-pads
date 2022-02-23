import { DrumProps } from "../interface/interface";
import * as Tone from "tone";

export const Pad = ({ children, note, isPlay, setIsPlay }: DrumProps) => {
	const synth = new Tone.Synth().toDestination();

	const playSynth = () => {
    synth.volume.value = -15;
		synth.triggerAttackRelease(note, "8n");
    setIsPlay("");
	};

  if(isPlay === note) {
    playSynth();
  }

	return (
		<div
			className="bg-pads-100 mx-auto w-24 h-24 rounded-xl my-4 text-center text-xl"
			onClick={playSynth}
		>
			{children}
		</div>
	);
};
