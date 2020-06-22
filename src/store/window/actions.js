import { copyToClipboard as _copyToClipboard } from "quasar";

export function copyToClipboard({ state, commit }, value) {
	_copyToClipboard(value)
		.then(() => {
			commit("updateCopyPopupVisibility", true);

			if (state.copyPopupIntervalId !== -1) {
				clearInterval(state.copyPopupIntervalId);
			}

			state.copyPopupIntervalId = setInterval(() => {
				commit("updateCopyPopupVisibility", false);
				clearInterval(state.copyPopupIntervalId);
				state.copyPopupIntervalId = -1;
			}, state.copyPopupStayTime);

			return state.copyPopupIntervalId;
		})
		// eslint-disable-next-line no-empty-function
		.catch(() => { });
}
