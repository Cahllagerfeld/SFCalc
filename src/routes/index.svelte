<script lang="ts">
	import MissionCalc from '../services/mission.calc.service';
	import Card from '../components/card.svelte';

	const missionCalcService = new MissionCalc();

	console.log({
		overall: missionCalcService.calcOverall(3.28, 586, 180, 3),
		money: missionCalcService.singleRatio(3.28, 180, 3),
		xp: missionCalcService.singleRatio(586, 180, 3)
	});
</script>

<div class="container">
	<div class="flex justify-between">
		<Card>
			<h1 class="text-3xl">Hallo Welt</h1>
		</Card>
		<Card>
			<h1 class="text-4xl">Hallo Welt</h1>
		</Card>
		<Card>
			<h1 class="text-4xl">Hallo Welt</h1>
		</Card>
	</div>
</div>
