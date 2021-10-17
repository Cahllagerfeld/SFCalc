<script lang="ts">
	import Mission from '../components/Mission/index.svelte';
	// import MissionCalc from '../services/mission.calc.service';

	// const missionCalcService = new MissionCalc();

	// console.log({
	// 	overall: missionCalcService.calcOverall(3.28, 586, 180, 3),
	// 	money: missionCalcService.singleRatio(3.28, 180, 3),
	// 	xp: missionCalcService.singleRatio(586, 180, 3)
	// });
</script>

<div class="grid grid-cols-1 md:grid-cols-3">
	<div><Mission /></div>
	<div class="outline-secondary ">Hallo Welt</div>
	<div class="outline-tertiary ">Hallo Welt</div>
</div>

<style type="text/postcss">
</style>
