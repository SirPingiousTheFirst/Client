import { onKeyStroke, useKeyModifier } from "@vueuse/core";
import { State } from "./State";

export interface IWindowState {
	isMaximized: boolean
	isShowingCommandPallete: boolean
}
export class WindowState extends State<IWindowState> {
	public ctrl = useKeyModifier("Control");
	public shift = useKeyModifier("Shift");
	constructor() {
		super({
			isMaximized: false,
			isShowingCommandPallete: false,
		});
		onKeyStroke("P", () => this.ctrl.value && (this.isShowingCommandPallete = true));
	}

	public get isShowingCommandPallete() {
		return this.state.isShowingCommandPallete;
	}

	public set isShowingCommandPallete(value: boolean) {
		this.state.isShowingCommandPallete = value;
	}

	public get isMaximized() {
		return this.state.isMaximized;
	}

	public set isMaximized(value: boolean) {
		this.state.isMaximized = value;
	}
}
