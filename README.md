# React トレーニング

[Cloud9](https://aws.amazon.com/jp/cloud9/) 上で [Create React App](https://github.com/facebook/create-react-app) を使ってみます。


## プロジェクトセットアップ

### AWS アカウント作成, Cloud9 インスタンス起動

割愛

### Node.js を最新化

Node.js のバージョンマネージャー `nvm` で LTS 版をインストールし、デフォルトをその LTS 版に変更します：

```bash
nvm install --lts
nvm alias default stable
```

### Create React App でプロジェクトを初期化

npm スクリプトを即時実行できる `npx` コマンドを使い、`create-react-app` を実行します：

```bash
npx create-react-app myapp
cd myapp
npm start
```

`npm start` で開発サーバーが起動するので、Cloud9 のメニューから表示します：

    Cloud9 menu > Preview > Preview Running Application


## TODO アプリ作成

### モック作成

まずは、動きや変数のない見た目だけのモックを作成します。  
CSS は、簡単のため削除してしまいます。

```diff
 src/
-├── App.css
 ├── App.js
 ├── App.test.js
-├── index.css
 ├── index.js
-├── logo.svg
 └── registerServiceWorker.js
```

App.js:

```diff
 import React, { Component } from 'react';
-import logo from './logo.svg';
-import './App.css';
 
 class App extends Component {
   render() {
     return (
-      <div className="App">
-        <header className="App-header">
-          <img src={logo} className="App-logo" alt="logo" />
-          <h1 className="App-title">Welcome to React</h1>
-        </header>
-        <p className="App-intro">
-          To get started, edit <code>src/App.js</code> and save to reload.
-        </p>
-      </div>
+      <section class="todoapp">
+        <header class="header">
+          <h1>todos</h1>
+          <input type="text" placeholder="new todo" />
+        </header>
+        <section class="main">
+          <ul class="todo-list">
+            <li>
+              <div class="view">todo 1</div>
+            </li>
+            <li>
+              <div class="view">todo 2</div>
+            </li>
+            <li>
+              <div class="view">todo 3</div>
+            </li>
+          </ul>
+        </section>
+      </section>
     );
   }
 }
```

index.js:

```diff
 import React from 'react';
 import ReactDOM from 'react-dom';
-import './index.css';
 import App from './App';
 import registerServiceWorker from './registerServiceWorker';
 
 ReactDOM.render(<App />, document.getElementById('root'));
 registerServiceWorker();
```

### 変数を表示する

スクリプト内の値を HTML に反映させてみます：

App.js:

```diff
 class App extends Component {
   render() {
+    const todoList = [
+      'House keeping',
+      'Answer the survey',
+      'Water the plants'
+    ];
+
     return (
       <section class="todoapp">
         <header class="header">
```

```diff
         <section class="main">
           <ul class="todo-list">
             <li>
-              <div class="view">todo 1</div>
+              <div class="view">{todoList[0]}</div>
             </li>
             <li>
-              <div class="view">todo 2</div>
+              <div class="view">{todoList[1]}</div>
             </li>
             <li>
-              <div class="view">todo 3</div>
+              <div class="view">{todoList[2]}</div>
             </li>
           </ul>
         </section>
```
