import '../node_modules/shizuku/www/css/shizuku.scss'
import { Shizuku, ShizukuMenu, ShizukuComponentManager, BaseComponents, Components } from 'shizuku'

const scm = new ShizukuComponentManager({
  components: [
    {
      label: '入力',
      children: [
        { label: 'CSVからの入力', constructor: Components.CsvInputComponent },
      ]
    },
    {
      label: 'フィルタ',
      children: [
        { label: '汎用のフィルタ', constructor: Components.GeneralFilterComponent },
      ]
    },
    {
      label: '結合・差分',
      children: [
        { label: 'Or(どれか一つでも含まれているもの)', constructor: Components.OrComponent},
        { label: 'And(全て入力に存在するもの)', constructor: Components.AndComponent},
        { label: 'Minus(特定の入力からその他の入力を引く)', constructor: Components.MinusComponent},
      ]
    },
    {
      label: '属性追加',
      children: [
        { label: '優先順に定数値追加', constructor: Components.AddAttributeByEntryOrderComponent},
      ]
    },
    {
      label: '出力',
      children: [
        { label: 'SQL DL', constructor: Components.DebugSQLComponent},
        { label: 'CSV DL', constructor: Components.OutputCsvComponent},
        { label: 'シェルスクリプト DL', constructor: Components.OutputShellComponent},
      ]
    },
  ]
});
const shizuku = new Shizuku(document.getElementById('shizuku-editor'), scm);
const shizukuMenu = new ShizukuMenu(document.getElementById('shizuku-menu'), shizuku, scm);
shizukuMenu.render();
window.shizuku = shizuku;
