<template>
	<div class="about-container">
		<span class="about-icon-container">
			<div class="openmcp-image"></div>
			<span>OpenMCP</span>
		</span>

		<p>
			{{ t('openmcp-developed-by', { version, author }) }}
		</p>


		<div style="display: inline-flex;">
			<el-button class="join-qq" type="primary"
				@click="gotoWebsite('https://github.com/LSTM-Kirigaya/openmcp-client')">
				<span class="iconfont icon-star"></span>
				{{ t('star-our-project') }}
			</el-button>

			<el-button class="join-qq" type="primary" @click="gotoWebsite('https://kirigaya.cn/openmcp')">
				<span class="iconfont icon-wendang"></span>
				{{ t('document') }}
			</el-button>
		</div>

		<br>

		<div style="display: inline-flex;">
			<el-button class="join-qq" type="primary"
				@click="joinQQGroup('https://qm.qq.com/cgi-bin/qm/qr?k=C6ZUTZvfqWoI12lWe7L93cWa1hUsuVT0&jump_from=webapi&authKey=McW6B1ogTPjPDrCyGttS890tMZGQ1KB3QLuG4aqVNRaYp4vlTSgf2c6dMcNjMuBD')">
				<span class="iconfont icon-QQ"></span>
				{{ t('join-discussion') }}
			</el-button>
			<el-button type="success" class="join-qq"
				@click="gotoWebsite('https://marketplace.visualstudio.com/items?itemName=kirigaya.openmcp&ssr=false#review-details')">
				<span class="iconfont icon-star"></span>
				{{ t('comment-for-us') }}
			</el-button>
		</div>

	</div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const version = '0.1.7';
const author = 'LSTM-Kirigaya (锦恢)';

defineComponent({ name: 'about' });

function joinQQGroup(url: string) {
	window.open(url, '_blank');
}

function gotoWebsite(url: string) {
	window.open(url, '_blank');
}

</script>

<style>
.about-container {
	text-align: center;
	height: 90%;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
}

.about-icon-container {
	box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
	border-radius: .8em;
	padding: 20px 30px;
	background-color: var(--background);
	display: flex;
	font-size: 30px;
	flex-direction: column;
	margin-bottom: 20px;
}

.about-icon-container span {
	background: -webkit-linear-gradient(120deg, #bd34fe, #41d1ff);
	-webkit-background-clip: text;
	background-clip: text;
	color: transparent;
	font-weight: bold;
	font-size: 45px;
}

.about-icon-container .iconfont {
	font-size: 180px;
}

.about-container>span>img {
	height: 150px;
	width: 150px;
}

.about-container .openmcp-image {
	width: 245px;
	height: 205px;
}

.about-container>.qr-code {
	height: 180px;
	border: 2px solid transparent;
	/* 设置边框宽度，但颜色透明 */
	border-image: linear-gradient(to bottom right, #7DDCEB, #CB81DA);
	border-image-slice: 1;
	/* 确保渐变覆盖整个边框 */
	background: white;
	/* 可选：防止内容穿透 */
}

.join-qq .iconfont {
	font-size: 20px;
	margin-right: 6px;
}
</style>