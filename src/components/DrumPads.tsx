import kick from "../sounds/Kick.wav";
import snare from "../sounds/Snare.wav";
import closedHh from "../sounds/ClosedHH.wav";
import rim from "../sounds/Rim.wav";
import melodyLoop1 from "../sounds/OSHI_melody_loop_garden_155_E.wav";
import melodyLoop2 from "../sounds/MM_2099_chord_loop_03_93_Fsharp.wav";

export const DrumPads = () => {
	const keys = [
		{ dataKey: 81, kbd: "Q", name: "Kick" },
		{ dataKey: 87, kbd: "W", name: "Snare" },
		{ dataKey: 69, kbd: "E", name: "Closed Hat" },
		{ dataKey: 82, kbd: "R", name: "Rim" },
		{ dataKey: 84, kbd: "T", name: "Fast Chords" },
		{ dataKey: 89, kbd: "Y", name: "Slow Chords" },
	];

	const removeTransition = (e: any) => {
		if (e.propertyName !== "transform") return;
		e.target.classList.remove("playing");
	};

	const playSound = async (e: any) => {
		const audio: HTMLMediaElement | null = document.querySelector(
			`audio[data-key="${e.keyCode}"]`
		);
		const pad = document.querySelector(`div[data-key="${e.keyCode}"]`);
		if (!audio) return;
		if (pad) pad.classList.add("playing");
		try {
			await audio.play();
		} catch (err) {
			console.error(err);
		}
	};

	const pads = Array.from(document.querySelectorAll(".pad"));

	pads.forEach((pad) =>
		pad.addEventListener("transitionend", removeTransition)
	);

	window.addEventListener("keydown", playSound);

	return (
		<div className="mx-auto">
			<div className="pads flex flex-row flex-wrap">
				{keys.map((key) => {
					return (
						<div
							data-key={key.dataKey}
							className="drum-pad bg-pads-100 w-24 h-24 rounded-xl my-4 text-center text-xl mx-4 flex flex-col"
						>
							<kbd>{key.kbd}</kbd>
							<span className="sound">{key.name}</span>
						</div>
					);
				})}
			</div>
			<audio data-key="81" src={kick}></audio>
			<audio data-key="87" src={snare}></audio>
			<audio data-key="69" src={closedHh}></audio>
			<audio data-key="82" src={rim}></audio>
			<audio data-key="84" src={melodyLoop1}></audio>
			<audio data-key="89" src={melodyLoop2}></audio>
		</div>
	);
};
