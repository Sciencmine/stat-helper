import { copyToClipboard as __copyToClipboard } from "quasar";

const copyPopupStayTime = 1000;

let copyPopupIntervalId = -1;

export function copyToClipboard({ commit }, value) {
	__copyToClipboard(value)
		.then(() => {
			commit("updateCopyPopupVisibility", true);

			if (copyPopupIntervalId !== -1) {
				clearInterval(copyPopupIntervalId);
			}

			copyPopupIntervalId = setInterval(() => {
				commit("updateCopyPopupVisibility", false);
				clearInterval(copyPopupIntervalId);
				copyPopupIntervalId = -1;
			}, copyPopupStayTime);

			return copyPopupIntervalId;
		})
		// eslint-disable-next-line no-empty-function
		.catch(() => { });
}
