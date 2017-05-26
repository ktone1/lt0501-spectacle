// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Table,
  TableHeader,
  TableHeaderItem,
  TableRow,
  TableBody,
  TableItem,
  Appear,
  CodePane,
  Link,
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  es6: require("../assets/ecmascript-6-es6-framework-training-logo.png"),
  jquery: require("../assets/jquery.gif"),
  html5canvas: require("../assets/html5-canvas.jpg"),
  webgl: require("../assets/WebGL_Logo.png"),
  rarrow: require("../assets/arrow.png"),
  enchant: require("../assets/enchant.png"),
  cocos2d: require("../assets/cocos2d.png"),
  pixijs: require("../assets/pixijs.png"),
  phaserjs: require("../assets/phaserjs.png"),
  dir: require("../assets/dir.png"),
  addon: require("../assets/addon.png"),
  animatecc: require("../assets/animatecc.png"),
  export: require("../assets/export.png"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

const bash_source = require("../assets/bash.text");
const babelrc_source = require("../assets/babelrc.text");
const webpack_source = require("../assets/webpack.text");
const html_source = require("../assets/html.text");
const js_source = require("../assets/js.text");
const package_source = require("../assets/package.text");
const start_source = require("../assets/start.text");

preloader(images);

const theme = createTheme({
  primary: "#F16529",
  secondary: "#1F2022",
  tertiary: "#0C72BA",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            簡単JSゲーム制作
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            モダンなJavaScriptでゲームを作る。
          </Text>
          <Image src={images.es6} width="300" />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="primary" caps>変遷</Heading>
          <Appear>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderItem>DOM</TableHeaderItem>
                <TableHeaderItem></TableHeaderItem>
                <TableHeaderItem>Canvas</TableHeaderItem>
                <TableHeaderItem></TableHeaderItem>
                <TableHeaderItem>WebGL</TableHeaderItem>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableItem><Image width="100%" src={images.jquery} /></TableItem>
                <TableItem><Image margin="10px" width="30px" src={images.rarrow} /></TableItem>
                <TableItem><Image width="100%" src={images.html5canvas} /></TableItem>
                <TableItem><Image margin="10px" width="30px" src={images.rarrow} /></TableItem>
                <TableItem><Image width="100%" src={images.webgl} /></TableItem>
              </TableRow>
              <TableRow>
                <TableItem><Text textColor="quartenary">〜2011</Text></TableItem>
                <TableItem></TableItem>
                <TableItem><Text textColor="quartenary">2011〜</Text></TableItem>
                <TableItem></TableItem>
                <TableItem><Text textColor="quartenary">2015？〜</Text></TableItem>
              </TableRow>
            </TableBody>
          </Table>
          </Appear>
          <Appear>
          <Text margin="10px" textColor="secondary" textSize="30px" bold>
            iOS8からWebGL対応
          </Text>
          </Appear>
          <Appear>
          <Text margin="10px" textColor="secondary" textSize="30px" bold>
            Androidでもスマホで大体は再生可能！
          </Text>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} textColor="tertiary" caps>JSゲームエンジン</Heading>
          <Appear>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderItem>enchant.js</TableHeaderItem>
                <TableHeaderItem>cocos2d-js</TableHeaderItem>
                <TableHeaderItem>pixi.js</TableHeaderItem>
                <TableHeaderItem>PhaserJS</TableHeaderItem>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableItem><Image margin="20px" width="200px" src={images.enchant} /></TableItem>
                <TableItem><Image margin="20px" width="200px" src={images.cocos2d} /></TableItem>
                <TableItem><Image margin="20px" width="200px" src={images.pixijs} /></TableItem>
                <TableItem><Image margin="20px" width="200px" src={images.phaserjs} /></TableItem>
              </TableRow>
              <TableRow>
                <TableItem><Text textSize="18px" textColor="quartenary">日本産</Text><Text textSize="18px" textColor="quartenary">とっくに廃れてる感</Text></TableItem>
                <TableItem><Text textSize="18px" textColor="quartenary">cocos2dのui editorなどエコシステムを活用できる</Text><Text textSize="18px" textColor="quartenary">動作環境のロックイン</Text></TableItem>
                <TableItem><Text textSize="18px" textColor="quartenary">2Dゲームに特化</Text><Text textSize="18px" textColor="quartenary">一番パフォーマンスが良いと思う</Text><Text textSize="18px" textColor="quartenary">シンプルなAPI</Text></TableItem>
                <TableItem><Text textSize="18px" textColor="quartenary">pixi.jsをコアにしてる</Text><Text textSize="18px" textColor="quartenary">充実したAPI</Text></TableItem>
              </TableRow>
            </TableBody>
          </Table>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Appear><Heading size={1} textColor="primary">pixi.jsを採用</Heading></Appear>
          <Appear><Heading size={5} textColor="secondary">CommonJSで簡単に使用可能</Heading></Appear>
          <Appear><Heading size={5} textColor="secondary">TypeScriptにも対応してる</Heading></Appear>
          <Appear><Heading size={5} textColor="secondary">簡単にWebGLでレンダリング</Heading></Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Appear><Heading size={1} textColor="secondary">早速作ってみよう</Heading></Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary">爆速環境構築(Mac)</Heading>
          <Appear>
          <Text margin="10px 0 0" textColor="secondary" textSize="30px" bold>
            Node.jsとyarnでパッケージ管理、Webpackでbundleする。
          </Text>
          </Appear>
          <Appear>
          <Text margin="10px" textColor="secondary" textSize="30px" bold>
            Babelを用いEcmaScript6で書けるようにする。
          </Text>
          </Appear>
          <Appear>
          <Text margin="10px" textColor="secondary" textSize="30px" bold>
            pixi-animateを用い、Adobe Flash資産を使えるようにする。
          </Text>
          </Appear>
          <Appear><CodePane lang="bash" source={bash_source} /></Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Appear>
          <Text margin="10px" textColor="secondary" textSize="30px" bold>
            ゲームのアニメーションのコードをいちいち書くのは大変
          </Text>
          </Appear>
          <Appear>
          <Text margin="10px" textColor="secondary" textSize="30px" bold>
            Adobe Animate CCやspineで作成したアニメーションをpixi.jsで再生や操作ができる。
          </Text>
          </Appear>
          <Appear>
          <Text margin="10px" textColor="secondary" textSize="30px" bold>
            yarn add pixi-animate
          </Text>
          </Appear>
          <Appear>
          <Text margin="10px" textColor="secondary" textSize="30px" bold>
            yarn add pixi-spine
          </Text>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Appear>
          <Text margin="10px 0 0" textColor="secondary" textSize="30px" bold>
            .babelrcを用意
          </Text>
          </Appear>
          <Appear><CodePane lang="json" source={babelrc_source} /></Appear>
          <Appear>
          <Text margin="10px 0 0" textColor="secondary" textSize="30px" bold>
            ES2015とstage0を取り込む
          </Text>
          </Appear>
          <Appear>
          <Text margin="10px 0 0" textColor="secondary" textSize="30px" bold>
            詳しくは、<Link href="https://azu.github.io/slide-what-is-ecmascript/slide/12.html">https://azu.github.io/slide-what-is-ecmascript/slide/12.html</Link>
          </Text>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Appear>
          <Text margin="10px" textColor="secondary" textSize="30px" bold>
            webpack.config.jsを用意
          </Text>
          </Appear>
          <Appear><CodePane lang="js" source={webpack_source} /></Appear>
          <Appear>
          <Text margin="10px 0 0" textColor="secondary" textSize="30px" bold>
            拡張子jsファイルにbabel-loaderを通す。bundle.jsという一つのファイルにまとめる。
          </Text>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Appear>
          <Text margin="10px" textColor="secondary" textSize="30px" bold>
            Adobe Animate CCにPixiAnimateExtensionアドオンをインストール
          </Text>
          </Appear>
          <Appear><Link href="https://creative.adobe.com/addons/products/14345">https://creative.adobe.com/addons/products/14345</Link></Appear>
          <Appear><Image margin="20px" height="300px" src={images.addon} /></Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Appear>
          <Text margin="10px" textColor="secondary" textSize="30px" bold>
            sample2.xflを開く
          </Text>
          </Appear>
          <Appear><Image margin="20px" width="600px" src={images.animatecc} /></Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Appear>
          <Text margin="10px" textColor="secondary" textSize="30px" bold>
            エキスポート設定
          </Text>
          </Appear>
          <Appear><Image margin="20px" width="300px" src={images.export} /></Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Appear>
          <Text margin="10px" textColor="secondary" textSize="30px" bold>
            src/index.jsの中身
          </Text>
          </Appear>
          <Appear><CodePane lang="js" source={js_source} /></Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Appear>
          <Text margin="10px" textColor="secondary" textSize="30px" bold>
            index.htmlの中身
          </Text>
          </Appear>
          <Appear><CodePane lang="html" source={html_source} /></Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Appear>
          <Text margin="10px" textColor="secondary" textSize="30px" bold>
            ディレクトリー構成
          </Text>
          </Appear>
          <Appear><Image margin="20px" width="200px" src={images.dir} /></Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Appear>
          <Text margin="10px" textColor="secondary" textSize="30px" bold>
            package.jsonにscriptsを追加
          </Text>
          </Appear>
          <Appear><CodePane lang="json" source={package_source} /></Appear>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Let’s Try！
          </Heading>
          <Appear><CodePane margin="50px" lang="bash" source={start_source} /></Appear>
        </Slide>
      </Deck>
    );
  }
}
