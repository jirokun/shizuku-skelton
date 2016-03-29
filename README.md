# 概要
shizuku フレームワークを使用してレポーティングシステムを作るときに使用する雛形

# セットアップ
```bash
git clone https://github.com/jirokun/shizuku-skelton.git my_shizuku
cd my_shizuku
npm install
```

# 起動方法
```bash
npm start
```

その後http://localhost:3000にアクセス

# 拡張方法
```bash
mkdir -p src/components/custom/input
mkdir -p src/components/custom/decorate
mkdir -p src/components/custom/filter
mkdir -p src/components/custom/logical
mkdir -p src/components/custom/output
```
上記スクリプトを実行し、それぞれのフォルダにコンポーネントを配置する。

https://github.com/jirokun/shizuku/blob/master/src/components/system/input/TableInputComponent.js
上記を参照して作れば良い。

ベースクラスは下記の5つがあり、それぞれ用途によって使い分ける

 - DecorateComponent データに属性を追加するコンポーネントの場合継承する
 - FilterComponent データをフィルタリングするコンポーネントの場合継承する
 - InputComponent 新規にデータを読み込むコンポーネントの場合継承する
 - LogicalComponent データを論理演算するコンポーネントの場合に継承する
 - OutputComponent データを出力するコンポーネントの場合に継承する
