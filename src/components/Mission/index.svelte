<script lang="ts">
	import SfButton from '../commons/SF-button.svelte';
	import SfInput from '../commons/SF-input.svelte';
	import SfRadio from '../commons/SF-radio.svelte';
	import missionCalc from '../../services/mission.calc.service';

	const MissionCalcInstance = new missionCalc();

	let group = 0;

	let mission1gold: number;
	let mission1xp: number;
	let mission1time: number;

	let mission2gold: number;
	let mission2xp: number;
	let mission2time: number;

	let mission3gold: number;
	let mission3xp: number;
	let mission3time: number;

	const performCalculation = () => {
		const mission1 = MissionCalcInstance.calcOverall(mission1gold, mission1xp, mission1time);
		const mission2 = MissionCalcInstance.calcOverall(mission2gold, mission2xp, mission2time);
		const mission3 = MissionCalcInstance.calcOverall(mission3gold, mission3xp, mission3time);

		const calculationResults = [
			{ ...mission1, id: 1 },
			{ ...mission2, id: 2 },
			{ ...mission3, id: 3 }
		];

		console.log(calculationResults);
	};
</script>

<div class="mb-12">
	<div class="grid grid-cols-1 md:grid-cols-3">
		<div>
			<div class="flex justify-center flex-col items-center ">
				<div class="outline-primary text-4xl">Mission 1</div>
				<SfInput label="Gold" theme="primary" bind:value={mission1gold} />
				<SfInput label="XP" theme="primary" bind:value={mission1xp} />
				<SfInput label="Time" theme="primary" bind:value={mission1time} />
			</div>
		</div>
		<div>
			<div class="flex justify-center flex-col items-center ">
				<div class="outline-secondary text-4xl">Mission 2</div>
				<SfInput label="Gold" theme="secondary" bind:value={mission2gold} />
				<SfInput label="XP" theme="secondary" bind:value={mission2xp} />
				<SfInput label="Time" theme="secondary" bind:value={mission2time} />
			</div>
		</div>
		<div>
			<div class="flex justify-center flex-col items-center ">
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
