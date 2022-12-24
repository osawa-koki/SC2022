
// const _pages = [
//   'インデックス',
//   '情報セキュリティ',
//   '脅威と脆弱性',
//   '不正のメカニズム',
//   '攻撃者の種類',
//   'パスワードクラック',
//   'webアプリに対する攻撃',
//   'エージェント型攻撃',
//   'サービス不能型攻撃',
//   '論理的クラッキング',
//   '攻撃の準備',
//   '暗号技術',
//   '認証',
//   '認証技術',
//   '公開鍵基盤',
//   '情報セキュリティ管理',
//   'リスク',
//   '情報セキュリティ継続',
//   'ISMS',
//   'セキュリティ技術評価',
//   '情報セキュリティ対策',
//   'セキュアプロトコル',
//   '認証プロトコル',
//   'OSのセキュリティ',
//   'アプリケーションセキュリティ',
//   '安全な技術',
//   'ネットワーク基礎',
//   'OSI基本参照モデル',
//   'ファイアウォール',
//   'IDS・IPS・WAF',
//   'データ通信と制御',
//   '通信プロトコル',
//   'ネットワーク管理',
//   'ネットワークセキュリティ',
//   'データベース',
//   'データベース設計',
//   'データベース操作',
//   'データベース管理',
//   'システム開発',
//   '開発プロセス・手法',
//   'サービスマネジメント',
//   'システム監査',
//   '補足',
// ];

type _Page = {
  title: string;
  id: string;
};

const _pages: _Page[] = [
  {
    title: 'インデックス',
    id: 'index',
  },
  {
    title: '情報セキュリティ',
    id: 'information-security',
  },
  {
    title: '脅威と脆弱性',
    id: 'threats-and-vulnerabilities',
  },
  {
    title: '不正のメカニズム',
    id: 'mechanisms-of-fraud',
  },
  {
    title: '攻撃者の種類',
    id: 'types-of-attackers',
  },
]

type Page = {
  index: number;
  title: string;
  id: string;
};

const pages: Page[] = _pages.map((page, index) => {
  return {
    index,
    title: page.title,
    id: page.id,
  };
});

export { pages };
