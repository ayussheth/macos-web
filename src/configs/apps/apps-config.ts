import { createAppConfig } from '🍎/helpers/create-app-config';

const wallpapers = createAppConfig({
  title: 'Wallpapers',
  resizable: true,

  height: 600,
  width: 800,

  dockBreaksBefore: true,
});

const calculator = createAppConfig({
  title: 'Calculator',

  expandable: true,
  resizable: false,

  height: 300 * 1.414,
  width: 300,
});

const calendar = createAppConfig({
  title: 'Calendar',
  resizable: true,
});

const vscode = createAppConfig({
  title: 'VSCode',
  resizable: true,

  height: 600,
  width: 800,
});

const finder = createAppConfig({
  title: 'Finder',
  resizable: true,

  // dockBreaksBefore: true,
  shouldOpenWindow: false,
});

const safari = createAppConfig({
  title: 'Safari',
  resizable: true,
});

const systemPreferences = createAppConfig({
  title: 'System Preferences',
  resizable: true,
});

const purusTwitter = createAppConfig({
  title: `Devloper Profile`,
  resizable: true,

  dockBreaksBefore: true,

  height: 600,
  width: 800,
});

const viewSource = createAppConfig({
  title: `Youtube`,
  resizable: true,

  shouldOpenWindow: false,
  externalAction: () => window.open('https://youtube.com/@Iamayussshkhurana?si=2Ao_h6s9mtulqgOf', '_blank'),
});

const ukraine = createAppConfig({
  title: `Video Portfolio`,
  resizable: true,

  shouldOpenWindow: false,
  externalAction: () => window.open('https://youtube.com/@AyusshPortfolio-rr7zm?si=20KLJlibCO0NfrGw', '_blank'),

  dockBreaksBefore: true,
});

const vercel = createAppConfig({
  title: `Powered by Vercel`,
  resizable: true,

  shouldOpenWindow: false,
  externalAction: () =>
    window.open('https://vercel.com/?utm_source=purus-projects&utm_campaign=oss', '_blank'),

  dockBreaksBefore: true,
});

const appstore = createAppConfig({
  title: 'App Store',
  resizable: true,
});

export const appsConfig = {
  finder,
  wallpapers,
  calculator,
  calendar,
  vscode,
  appstore,
  // safari,

  // 'system-preferences': systemPreferences,

  'purus-twitter': purusTwitter,
  'view-source': viewSource,

  vercel,

  ukraine,
};
