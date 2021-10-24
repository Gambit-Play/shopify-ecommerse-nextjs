import {
	createContext,
	FunctionComponent,
	useContext,
	useMemo,
	useReducer,
} from 'react';

export interface StateModifiers {
	openSidebar: () => void;
	closeSidebar: () => void;
}

export interface StateValues {
	isSidebarOpen: boolean;
}

type State = StateValues & StateModifiers;

type Action = { type: 'OPEN_SIDEBAR' | 'CLOSE_SIDEBAR' };

const stateModifiers = {
	openSidebar: () => {},
	closeSidebar: () => {},
};

const initialState = { isSidebarOpen: false };

function uiReducer(state: StateValues, action: Action) {
	switch (action.type) {
		case 'OPEN_SIDEBAR': {
			return {
				...state,
				isSidebarOpen: true,
			};
		}
		case 'CLOSE_SIDEBAR': {
			return {
				...state,
				isSidebarOpen: false,
			};
		}
	}
}

const UIContext = createContext<State>({
	...stateModifiers,
	...initialState,
});

export const UIProvider: FunctionComponent = ({ children }) => {
	const [state, dispatch] = useReducer(uiReducer, initialState);
	const openSidebar = () => dispatch({ type: 'OPEN_SIDEBAR' });
	const closeSidebar = () => dispatch({ type: 'CLOSE_SIDEBAR' });

	const value = useMemo(() => {
		return {
			...state,
			openSidebar,
			closeSidebar,
		};
	}, [state]);

	return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export const useUI = () => {
	const context = useContext(UIContext);

	return context;
};
