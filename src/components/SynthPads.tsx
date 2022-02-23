import { useEffect, useState } from "react";
import { Pad } from "./Pad";
import { PadsContainer } from "./PadsContainer";

export const SynthPads = () => {
	const [octave, setOctave] = useState(4);
	const notes: string[] = [
		`C${octave}`,
		`C#${octave}`,
		`D${octave}`,
		`D#${octave}`,
		`E${octave}`,
		`F${octave}`,
		`F#${octave}`,
		`G${octave}`,
		`G#${octave}`,
		`A${octave}`,
		`A#${octave}`,
		`B${octave}`,
		`C${octave + 1}`,
	];

	const freqs: number[] = [440];
	const [isPlay, setIsPlay] = useState("");

	const keyToFreq = (n: number) => {
    // * C4: n = 40
		return 440 * Math.pow(2, (n - 49) / 12);
	};

	useEffect(() => {
		window.addEventListener("keydown", (e) => {
			// console.log(e.key)
			switch (e.key) {
				case "a":
					setIsPlay(notes[0]);
					break;
				case "w":
					setIsPlay(notes[1]);
					break;
				case "s":
					setIsPlay(notes[2]);
					break;
				case "e":
					setIsPlay(notes[3]);
					break;
				case "d":
					setIsPlay(notes[4]);
					break;
				case "f":
					setIsPlay(notes[5]);
					break;
				case "t":
					setIsPlay(notes[6]);
					break;
				case "g":
					setIsPlay(notes[7]);
					break;
				case "y":
					setIsPlay(notes[8]);
					break;
				case "h":
					setIsPlay(notes[9]);
					break;
				case "u":
					setIsPlay(notes[10]);
					break;
				case "j":
					setIsPlay(notes[11]);
					break;
				default:
					console.log("this note is not registered");
			}
		});
	}, []);

	const changeOctave = (e: any) => {
		setOctave(e.target.value);
	};
	return (
		<PadsContainer>
			{notes.map((note: string) => {
				return (
					<Pad note={note} key={note} isPlay={isPlay} setIsPlay={setIsPlay}>
						{note}
					</Pad>
				);
			})}
			<div>
				Octave:
				<input type="number" value={octave} onChange={changeOctave} />
			</div>
		</PadsContainer>
		// 		<PadsContainer>
		// 	{freqs.map((freq: number) => {
		// 		return (
		// 			<Pad note={freq} key={freq} isPlay={isPlay} setIsPlay={setIsPlay}>
		// 				{freq}
		// 			</Pad>
		// 		);
		// 	})}
		// </PadsContainer>
	);
};
