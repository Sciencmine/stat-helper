export function updateTitle(state, title) {
	document.title = state.title = title;
}

export function updateDrawerOpenness(state, opened) {
	state.drawerOpened = opened;
}

export function updateCopyPopupVisibility(state, visible) {
	state.copyPopupVisible = visible;
}
