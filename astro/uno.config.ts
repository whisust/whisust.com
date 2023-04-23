import {
  defineConfig,
  presetIcons,
  presetWind,
  presetTypography,
} from 'unocss';

const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "pink",
  "purple",
  "orange",
  "teal",
  "cyan",
  "lime",
  "emerald",
  "fuchsia",
  "violet",
  "rose",
  "sky",
  "amber",
];

const getSafeList = () => {
  let list: string[] = [];
  colors.forEach((color) => {
    list.push(`hover:bg-${color}`);
    list.push(`bg-${color}`);
    list.push(`prose-${color}`);
  });
  return list;
};

export default defineConfig({
  presets: [
    presetWind(),
    presetIcons({
      collections: {
        uil: () =>
            import('@iconify-json/uil/icons.json').then((l) => l.default),
      },
    }),
    presetTypography(),
  ],
  safelist: getSafeList(),
});
