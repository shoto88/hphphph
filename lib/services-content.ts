export interface ServiceContent {
    title: string;
    description: string;
    longDescription: string;
    symptoms?: string[];
    treatments?: string[];
    additionalInfo?: string;
  }
  
  export const servicesContent: Record<string, ServiceContent> = {
    headache: {
      title: '頭痛',
      description: '頭痛の診断と治療',
      longDescription: '当院では、片頭痛、緊張型頭痛、群発頭痛などさまざまな種類の頭痛に対応しています。最新の診断技術と治療法を用いて、患者様一人一人に適したケアを提供します。',
      symptoms: [
        '頭が痛い',
        '頭が重い',
        '吐き気を伴う頭痛',
        '光や音に敏感になる',
      ],
      treatments: [
        '薬物療法',
        '生活習慣の改善指導',
        'ストレス管理技術の指導',
        '頭痛予防のための運動療法',
      ],
    },
    gynecology: {
      title: '婦人科',
      description: '婦人科の診療',
      longDescription: '女性特有の健康問題に対応し、生涯を通じての女性の健康をサポートします。定期検診から複雑な婦人科疾患の治療まで、幅広いケアを提供しています。',
      symptoms: [
        '生理不順',
        '不正出血',
        '下腹部痛',
        '更年期症状',
      ],
      treatments: [
        '婦人科検診',
        'ホルモン療法',
        '婦人科手術',
        '更年期障害のケア',
      ],
    },
    // 他の診療科目も同様に追加
  };