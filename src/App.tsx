import React from "react";
import { Container } from "./components/Container";
import { PadsContainer } from "./components/PadsContainer";
import { DrumPads } from "./components/DrumPads";
import { SynthPads } from "./components/SynthPads";

function App() {


	return (
		<div className="mx-auto">
			<Container>
        <PadsContainer>
          <DrumPads />
        </PadsContainer>
        {/* <PadsContainer>
          <SynthPads />
        </PadsContainer> */}

			</Container>
		</div>
	);
}

export default App;
