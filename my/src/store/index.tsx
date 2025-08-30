import { configureStore, combineReducers } from '@reduxjs/toolkit';
import myThemesReducer from './modules/themeStore';
import worldThemesReducer from './modules/worldStore';
import cardThemesReducer from './modules/cardStore';
import cardThemessReducer from './modules/cardThemeStore';
import cardColorReducer from './modules/cardColorStore';
import borderThemesReducer from './modules/borderTheme';
import contentColorsReducer from './modules/contentStoe';

const rootReducer = combineReducers({
  myThemes: myThemesReducer,
  worldThemes: worldThemesReducer,
  cardThemes: cardThemesReducer,
  cardsThemes: cardThemessReducer,
  cardColors: cardColorReducer,
  borderThemes: borderThemesReducer,
  contentColors: contentColorsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

type RootState = ReturnType<typeof rootReducer>;

export { store, RootState };
