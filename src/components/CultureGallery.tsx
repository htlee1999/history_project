import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface CultureItem {
  icon: string;
  title: string;
  period: string;
  subtitle: string;
  description: string;
  sections: {
    title: string;
    items: string[];
  }[];
  quote?: {
    text: string;
    author: string;
  };
}

const cultureItems: CultureItem[] = [
  {
    icon: "🏺",
    title: "Chinese Porcelain 中国陶瓷",
    period: "Tang-Qing Dynasties (618-1912 CE)",
    subtitle: "The pinnacle of ceramic artistry 陶瓷艺术的巅峰",
    description: "Chinese porcelain represents one of humanity's greatest artistic and technological achievements. From the Tang Dynasty's revolutionary lead-glaze technology to the Song Dynasty's Five Great Kilns, Chinese artisans perfected techniques that remained unmatched for centuries.",
    sections: [
      {
        title: "🎨 Technical Evolution 技术发展",
        items: [
          "Tang Sancai 唐三彩: Lead-glaze breakthrough with copper (green), iron (brown), manganese (purple) oxides",
          "Song Five Great Kilns 宋代五大名窑: Ru (sky blue), Guan (ice-crack patterns), Ge (golden wire & iron lines), Jun (transmutation glaze), Ding (white porcelain)",
          "Yuan Innovation 元代革新: Kaolin-petuntse formula enabling 1300°C+ firing",
          "Doucai Technique 斗彩: Underglaze blue + overglaze enamels (Chenghua Chicken Cup)"
        ]
      },
      {
        title: "🌍 Global Impact 全球影响",
        items: [
          "Maritime Silk Road 海上丝绸之路: Primary export driving 16th-18th century European \"white gold\" fever",
          "European Collections: Portuguese Braganza collection (Ming blue-and-white), German Meissen kiln imitations (1710)",
          "Linglong Porcelain 玲珑瓷: Pierced body technique achieving 80% light transmission"
        ]
      }
    ]
  },
  {
    icon: "🖋️",
    title: "Chinese Poetry & Painting 中国诗画艺术",
    period: "Tang-Song Golden Age (618-1279 CE)",
    subtitle: "Poetry and painting as unified art forms 诗画一体的艺术形式",
    description: "Chinese culture uniquely merged poetry, painting, and calligraphy into a single artistic expression. Su Shi's famous theory established the foundation of literati art.",
    sections: [
      {
        title: "🎭 Artistic Schools 艺术流派",
        items: [
          "Northern Song Mountain-Water 北宋北方山水派: Fan Kuan's \"Travelers Among Mountains and Streams\" - axe-cut texture, panoramic composition",
          "Southern Song Ma-Xia School 南宋马夏派: Ma Yuan's \"Dancing and Singing\" - corner composition, poetic spacing",
          "Yuan Literati Painting 元代文人画: Ni Zan's \"Rongxi Studio\" - calligraphic brushwork, spiritual essence over form"
        ]
      },
      {
        title: "📜 Poetry Forms & Cross-Arts 诗歌格律与跨界艺术",
        items: [
          "Tang Regulated Verse 唐代近体诗: Five/seven-character forms, Du Fu's \"Eight Poems of Autumn Meditations\"",
          "Ci Poetry 词牌音乐性: Short form (Huanxisha 56 characters), long form (Shuidiagetou 95 characters)",
          "Ceramic Poetry 陶瓷题诗: Changsha kilns' Tang poetry vessels, Qianlong enamel \"Flowers on Brocade\" series"
        ]
      }
    ],
    quote: {
      text: "Before my bed the bright moonlight gleams, Like frost upon the ground it seems. I lift my head to watch the moon, Lower it, and think of home. 床前明月光，疑是地上霜。举头望明月，低头思故乡。",
      author: "Li Bai (李白), \"Quiet Night Thoughts 静夜思\""
    }
  },
  {
    icon: "🖼️",
    title: "Renaissance Masterpieces",
    period: "Italian Renaissance (1300-1600 CE)",
    subtitle: "Rebirth of classical ideals and humanism",
    description: "The Italian Renaissance revolutionized European art through scientific perspective, anatomical precision, and humanist philosophy. Artists became scholars, engineers, and philosophers, creating works that still define artistic excellence.",
    sections: [
      {
        title: "🎭 Renaissance Giants",
        items: [
          "Leonardo da Vinci: \"Mona Lisa,\" \"The Last Supper\" - perfect fusion of art and science",
          "Michelangelo: Sistine Chapel ceiling, \"David\" - divine artistic power",
          "Raphael: \"School of Athens\" - harmony and classical perfection",
          "Botticelli: \"Birth of Venus\" - mythological beauty and neo-Platonic ideals"
        ]
      }
    ],
    quote: {
      text: "Painting is poetry that is seen rather than felt, and poetry is painting that is felt rather than seen.",
      author: "Leonardo da Vinci"
    }
  },
  {
    icon: "🎨",
    title: "French Artistic Revolution",
    period: "Impressionism & Post-Impressionism (1860-1920)",
    subtitle: "Light, color, and modern perception",
    description: "French artists revolutionized painting by abandoning academic traditions for direct observation of light and color. Impressionism and Post-Impressionism fundamentally changed how art represents reality and emotion.",
    sections: [
      {
        title: "🌅 Revolutionary Artists",
        items: [
          "Claude Monet: \"Water Lilies,\" \"Impression, Sunrise\" - capturing fleeting light",
          "Pierre-Auguste Renoir: Joyful portraits celebrating human warmth and beauty",
          "Paul Cézanne: Geometric forms laying groundwork for modern art",
          "Vincent van Gogh: Emotional intensity through bold colors and brushstrokes"
        ]
      }
    ]
  },
  {
    icon: "🏛️",
    title: "Greek Sculptural Perfection",
    period: "Classical Period (5th-4th Century BCE)",
    subtitle: "Idealized human form and divine proportion",
    description: "Ancient Greek sculpture established the foundation of Western artistic tradition through mathematical proportion, anatomical accuracy, and philosophical idealism. These works expressed Greek concepts of beauty, heroism, and divine perfection.",
    sections: [
      {
        title: "⚡ Eternal Masterpieces",
        items: [
          "Venus de Milo: Hellenistic beauty and feminine grace personified",
          "Discus Thrower (Discobolus): Athletic perfection frozen in motion",
          "Parthenon Sculptures: Architectural integration of myth and reality",
          "Laocoön Group: Dramatic emotional expression in marble"
        ]
      }
    ],
    quote: {
      text: "Beauty is truth, truth beauty—that is all ye know on earth, and all ye need to know.",
      author: "John Keats, inspired by Greek art"
    }
  },
  {
    icon: "🕌",
    title: "Islamic Geometric Art",
    period: "Islamic Golden Age (8th-13th Century)",
    subtitle: "Mathematics transformed into spiritual beauty",
    description: "Islamic art created a unique aesthetic vocabulary through geometric patterns, arabesques, and calligraphy. These designs express the infinite nature of Allah through mathematical precision and endless repetition.",
    sections: [
      {
        title: "🌟 Sacred Geometries",
        items: [
          "Alhambra Palace: Complex geometric tilework creating infinite patterns",
          "Arabic Calligraphy: Sacred text transformed into visual art",
          "Mosque Architecture: Mihrab decorations and dome designs",
          "Persian Miniatures: Detailed manuscript illustrations"
        ]
      }
    ]
  }
];

export function CultureGallery() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {cultureItems.map((item, index) => (
        <Card key={index} className="group overflow-hidden card-hover bg-card border-border/60 shadow-sm animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500/50 via-amber-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <CardHeader className="pb-4">
            <div className="flex items-center gap-4 mb-3">
              <span className="text-3xl transition-transform duration-500 ease-out group-hover:scale-105">
                {item.icon}
              </span>
              <CardTitle className="text-lg font-medium text-foreground flex-1 tracking-tight">
                {item.title}
              </CardTitle>
            </div>
            <Badge variant="secondary" className="w-fit bg-primary text-primary-foreground text-xs font-medium">
              {item.period}
            </Badge>
            <CardDescription className="text-muted-foreground font-normal italic mt-2">
              {item.subtitle}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <p className="text-foreground/80 leading-relaxed text-sm">
              {item.description}
            </p>
            
            {item.quote && (
              <div className="quote-block">
                <p className="text-foreground/90 italic mb-2 leading-relaxed text-sm">
                  "{item.quote.text}"
                </p>
                <p className="text-muted-foreground text-xs font-medium">
                  {item.quote.author}
                </p>
              </div>
            )}
            
            {item.sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="bg-muted/50 rounded-xl p-5 border border-border/40">
                <h4 className="font-medium text-foreground mb-3 text-sm">
                  {section.title}
                </h4>
                <ul className="space-y-2.5">
                  {section.items.map((listItem, itemIndex) => (
                    <li key={itemIndex} className="text-muted-foreground text-sm leading-relaxed pl-4 relative">
                      <span className="absolute left-0 top-2 w-1 h-1 bg-amber-500/70 rounded-full"></span>
                      {listItem}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
