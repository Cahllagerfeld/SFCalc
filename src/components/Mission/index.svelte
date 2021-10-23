<script lang="ts">
	import type { CalculationSort } from '../../interfaces/Calculation.interfaces';
	import missionCalc from '../../services/mission.calc.service';
	import SfButton from '../commons/SF-button.svelte';
	import SfInput from '../commons/SF-input.svelte';
	import SfRadio from '../commons/SF-radio.svelte';

	const MissionCalcInstance = new missionCalc();

	let group = 0;

	let mission1gold: number;
	let mission1xp: number;
	let mission1time: string;

	let mission2gold: number;
	let mission2xp: number;
	let mission2time: string;

	let mission3gold: number;
	let mission3xp: number;
	let mission3time: string;

	let grayScaleObserver: number = null;

	const performCalculation = () => {
		const mission1ConvertedTime = MissionCalcInstance.convertMinutestoSeconds(mission1time);
		const mission2ConvertedTime = MissionCalcInstance.convertMinutestoSeconds(mission2time);
		const mission3ConvertedTime = MissionCalcInstance.convertMinutestoSeconds(mission3time);

		const mission1 = MissionCalcInstance.calcOverall(
			mission1gold,
			mission1xp,
			mission1ConvertedTime
		);
		const mission2 = MissionCalcInstance.calcOverall(
			mission2gold,
			mission2xp,
			mission2ConvertedTime
		);
		const mission3 = MissionCalcInstance.calcOverall(
			mission3gold,
			mission3xp,
			mission3ConvertedTime
		);

		const calculationResults: CalculationSort[] = [
			{ ...mission1, id: 1 },
			{ ...mission2, id: 2 },
			{ ...mission3, id: 3 }
		];

		const searchedValue = MissionCalcInstance.sortCalculation(calculationResults, group);
		grayScaleObserver = searchedValue;
	};
</script>

<div class="mb-12">
	<div class="grid grid-cols-1 md:grid-cols-3">
		<div>
			<div
				class="flex justify-center flex-col items-center  md:border-right"
				class:grayscale={grayScaleObserver != 1 && grayScaleObserver}
			>
				<div class="outline-primary text-4xl">Mission 1</div>
				<SfInput label="Gold" theme="primary" bind:value={mission1gold} />
				<SfInput label="XP" theme="primary" bind:value={mission1xp} />
				<SfInput label="Time" theme="primary" bind:value={mission1time} />
			</div>
		</div>
		<div>
			<div
				class="flex justify-center flex-col items-center md:border-right"
				class:grayscale={grayScaleObserver != 2 && grayScaleObserver}
			>
				<div class="outline-secondary text-4xl">Mission 2</div>
				<SfInput label="Gold" theme="secondary" bind:value={mission2gold} />
				<SfInput label="XP" theme="secondary" bind:value={mission2xp} />
				<SfInput label="Time" theme="secondary" bind:value={mission2time} />
			</div>
		</div>
		<div>
			<div
				class="flex justify-center flex-col items-center"
				class:grayscale={grayScaleObserver != 3 && grayScaleObserver}
			>
				<div class="outline-tertiary text-4xl">Mission 3</div>
				<SfInput label="Gold" theme="tertiary" bind:value={mission3gold} />
				<SfInput label="XP" theme="tertiary" bind:value={mission3xp} />
				<SfInput label="Time" theme="tertiary" bind:value={mission3time} />
			</div>
		</div>
	</div>
</div>
<div class="flex justify-center flex-col items-center">
	<div class="mb-4">
		<SfRadio bind:group value={1} label="Gold" name="inputs" />
		<SfRadio bind:group value={2} label="XP" name="inputs" />
		<SfRadio bind:group value={3} label="Overall" name="inputs" />
	</div>
	<SfButton click={performCalculation} label="Berechne" />
</div>

<style type="text/postcss">
</style>
