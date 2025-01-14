import type { API } from "../api";
import { CachableItemManager } from "../../types/api/CachableItem";
import { MachinesState } from "./MachinesState";
import { SettingsState } from "./SettingState";
import { UsersState } from "./UsersState";
import { WindowState } from "./WindowState";
import type { ILabelProperties } from "/@/types/api/label";
import { Label } from "/@/types/api/label";

/**
 * Brings all the states together and includes some managing methods for them
 * and other utilities
 */
export class AppState {
	public users: UsersState;
	public machines: MachinesState;
	public settings: SettingsState & {[key: string]: any};
	public window: WindowState;
	public labels: CachableItemManager<Label, ILabelProperties>;

	constructor(public api: API) {
		this.users = new UsersState(this.api);
		this.machines = new MachinesState(this.api);
		this.settings = new SettingsState();
		this.window = new WindowState();
		this.labels = new CachableItemManager(this.api, Label, "labels");
		this.labels.fetchAll();
	}
}
