<script setup lang="ts">
	import { reactive } from "vue";
	import Time from "./components/Time.vue";
	// 选择时间弹窗的数据
	const timeQuantumProps = reactive({
		show: false,
		tag: "",
	});
	// 选择监控时间段
	function selectTimeQuantum(text) {
		Object.assign(timeQuantumProps, {
			show: true,
			tag: text,
			disabled: "详情",
		});
	}
</script>

<template>
	<el-form-item
		label="监控时间段"
		prop="monitorTimePeriods"
		>{{ timeQuantumProps }}
		<el-button
			type="primary"
			size="small"
			@click="selectTimeQuantum('monitorTimePeriod')"
			>设置</el-button
		>
	</el-form-item>
	<!-- 选择时间段 -->
	<Time
		v-if="timeQuantumProps.show"
		:timeQuantumProps="timeQuantumProps"></Time>
</template>

<style lang="scss"></style>
