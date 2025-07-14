export interface HistoryEvent {
  date: string;
  title: string;
  description: string;
}

export interface CountryData {
  title: string;
  events: HistoryEvent[];
}

export interface CountryCard {
  id: string;
  flag: string;
  name: string;
  summary: string;
}

export const historyData: Record<string, CountryData> = {
  china: {
    title: "History of China 🇨🇳",
    events: [
      {
        date: "c. 2070-1600 BCE",
        title: "Xia Dynasty 夏朝",
        description: "China's first hereditary dynasty recorded in historical texts. Established after Yu the Great tamed the floods, beginning the 'family rule under heaven' system. Declined when the last ruler Jie became tyrannical and was overthrown by Tang of Shang.<br><br><strong>中文：</strong>中国史书记载的第一个世袭制王朝，大禹治水后建立，开启\"家天下\"。末代君主桀暴虐无道，被商汤推翻。"
      },
      {
        date: "1600-1046 BCE",
        title: "Shang Dynasty 商朝",
        description: "Advanced bronze civilization with the appearance of oracle bone script (China's earliest mature writing system). Flourished with sophisticated bronze working and divination practices. Fell when the cruel King Zhou was defeated by King Wu of Zhou at the Battle of Muye.<br><br><strong>中文：</strong>青铜器文明发达，甲骨文出现（中国最早成熟文字）。商纣王残暴，周武王伐纣，牧野之战后灭亡。"
      },
      {
        date: "1046-771 BCE",
        title: "Western Zhou 西周",
        description: "Established the feudal system and ritual music institutions that laid the foundation of Chinese culture. Declined when King You 'lit beacon fires to amuse his concubine,' leading to the Quanrong invasion of the capital Haojing.<br><br><strong>中文：</strong>分封制、礼乐制度奠定中华文化基础。周幽王\"烽火戏诸侯\"，犬戎攻破镐京。"
      },
      {
        date: "770-256 BCE",
        title: "Eastern Zhou 东周 (Spring & Autumn, Warring States)",
        description: "Period of feudal lords competing for hegemony and the 'Hundred Schools of Thought' philosophical flowering. Included great thinkers like Confucius, Laozi, and Mencius. Eventually unified by the state of Qin.<br><br><strong>中文：</strong>春秋战国：诸侯争霸，百家争鸣，最终被秦统一。"
      },
      {
        date: "221-206 BCE",
        title: "Qin Dynasty 秦朝",
        description: "China's first unified empire under Emperor Qin Shi Huang. Standardized writing, currency, and measurements, and built the Great Wall. Rapidly collapsed after harsh laws and heavy corvée labor led to the Chen Sheng-Wu Guang rebellion.<br><br><strong>中文：</strong>中国首个大一统王朝，统一文字、度量衡，修长城。严刑峻法、徭役繁重，陈胜吴广起义后迅速崩溃。"
      },
      {
        date: "202 BCE - 9 CE",
        title: "Western Han 西汉",
        description: "Golden age featuring the 'Rule of Wen and Jing' and Emperor Wu's territorial expansion. Opened the Silk Road for East-West trade. Declined due to external relatives' interference in politics, ending when Wang Mang usurped the throne.<br><br><strong>中文：</strong>文景之治、汉武帝开疆拓土，丝绸之路开通。外戚专权，王莽篡汉。"
      },
      {
        date: "1978",
        title: "Economic Reforms Begin 改革开放",
        description: "Deng Xiaoping initiates market-oriented reforms and opening-up policy, transforming China from a planned economy to a socialist market economy with rapid growth.<br><br><strong>中文：</strong>邓小平推行改革开放政策，从计划经济向社会主义市场经济转型，开始快速发展。"
      },
      {
        date: "2001",
        title: "WTO Membership 加入世贸组织",
        description: "China joins the World Trade Organization, accelerating its integration into the global economy and becoming the world's second-largest economy.<br><br><strong>中文：</strong>中国加入世界贸易组织，加速融入全球经济，成为世界第二大经济体。"
      }
    ]
  },
  usa: {
    title: "History of the United States 🇺🇸",
    events: [
      {
        date: "1607",
        title: "Jamestown Founded",
        description: "First permanent English settlement in North America established in Virginia, beginning sustained European colonization."
      },
      {
        date: "1776",
        title: "Declaration of Independence",
        description: "Thirteen colonies declare independence from Britain, articulating principles of individual liberty and self-governance."
      },
      {
        date: "1787",
        title: "Constitution Ratified",
        description: "U.S. Constitution establishes federal government structure with checks and balances, becoming model for modern democracies."
      },
      {
        date: "1803",
        title: "Louisiana Purchase",
        description: "Territory doubled through purchase from France, beginning westward expansion across the continent."
      },
      {
        date: "1861-1865",
        title: "Civil War",
        description: "Union defeats Confederacy, ending slavery and preserving the United States as a single nation."
      },
      {
        date: "1869",
        title: "Transcontinental Railroad",
        description: "First transcontinental railroad completed, connecting East and West coasts and spurring economic development."
      },
      {
        date: "1917-1918",
        title: "World War I",
        description: "U.S. enters world stage as major power, helping Allied victory and shaping post-war international order."
      },
      {
        date: "1941-1945",
        title: "World War II",
        description: "U.S. leads Allied victory, emerges as global superpower, and takes leading role in establishing international institutions."
      },
      {
        date: "1969",
        title: "Moon Landing",
        description: "Apollo 11 mission achieves first lunar landing, demonstrating American technological leadership during Cold War."
      },
      {
        date: "1991",
        title: "End of Cold War",
        description: "Soviet Union collapses, leaving United States as world's sole superpower in a unipolar global system."
      }
    ]
  },
  uk: {
    title: "History of the United Kingdom 🇬🇧",
    events: [
      {
        date: "1066",
        title: "Norman Conquest",
        description: "William the Conqueror defeats Anglo-Saxons at Battle of Hastings, introducing Norman culture and feudalism to England."
      },
      {
        date: "1215",
        title: "Magna Carta",
        description: "King John signs charter limiting royal power and establishing principle that even monarchs are subject to law."
      },
      {
        date: "1534",
        title: "English Reformation",
        description: "Henry VIII breaks with Roman Catholic Church, establishing Church of England and strengthening royal authority."
      },
      {
        date: "1707",
        title: "Act of Union",
        description: "England and Scotland unite to form Kingdom of Great Britain, creating political foundation for modern UK."
      },
      {
        date: "1760-1840",
        title: "Industrial Revolution",
        description: "Britain becomes 'workshop of the world' through mechanization, steam power, and factory system innovations."
      },
      {
        date: "1815",
        title: "Battle of Waterloo",
        description: "Wellington defeats Napoleon, beginning century of British global dominance and 'Pax Britannica.'"
      },
      {
        date: "1837-1901",
        title: "Victorian Era",
        description: "Peak of British Empire under Queen Victoria, covering quarter of world's land and population."
      },
      {
        date: "1914-1918",
        title: "World War I",
        description: "Britain leads Allied victory but suffers enormous casualties, beginning decline of empire and global influence."
      },
      {
        date: "1940",
        title: "Battle of Britain",
        description: "RAF defeats German Luftwaffe, preventing Nazi invasion and marking turning point in World War II."
      },
      {
        date: "1973",
        title: "Joins European Community",
        description: "UK joins European Economic Community (later EU), marking shift toward European integration and away from Commonwealth focus."
      }
    ]
  },
  france: {
    title: "History of France 🇫🇷",
    events: [
      {
        date: "843",
        title: "Treaty of Verdun",
        description: "Charlemagne's empire divided, creating West Francia, the foundation of modern France."
      },
      {
        date: "987",
        title: "Capetian Dynasty",
        description: "Hugh Capet becomes king, establishing dynasty that will rule France for centuries and strengthen royal power."
      },
      {
        date: "1337-1453",
        title: "Hundred Years' War",
        description: "Long conflict with England, featuring Joan of Arc, ultimately strengthening French national identity and monarchy."
      },
      {
        date: "1598",
        title: "Edict of Nantes",
        description: "Henry IV grants religious tolerance to Protestants, ending French Wars of Religion and strengthening royal authority."
      },
      {
        date: "1643-1715",
        title: "Louis XIV Reign",
        description: "Sun King establishes absolute monarchy, builds Versailles, and makes France dominant European power."
      },
      {
        date: "1789",
        title: "French Revolution Begins",
        description: "Revolution overthrows monarchy, declares Rights of Man, and transforms European political landscape."
      },
      {
        date: "1804",
        title: "Napoleon's Empire",
        description: "Napoleon becomes Emperor, conquers much of Europe, and spreads revolutionary ideals across continent."
      },
      {
        date: "1870",
        title: "Third Republic",
        description: "Franco-Prussian War defeat leads to Paris Commune and establishment of France's longest-lasting republic."
      },
      {
        date: "1944",
        title: "Liberation of Paris",
        description: "Allied forces liberate Paris from Nazi occupation, restoring French sovereignty and Charles de Gaulle's leadership."
      },
      {
        date: "1958",
        title: "Fifth Republic",
        description: "De Gaulle establishes current French political system with strong presidency and constitutional framework."
      }
    ]
  },
  korea: {
    title: "History of South Korea 🇰🇷",
    events: [
      {
        date: "57 BCE - 668 CE",
        title: "Three Kingdoms Period",
        description: "Goguryeo, Baekje, and Silla kingdoms compete for control, developing distinct Korean culture and Buddhism."
      },
      {
        date: "918-1392",
        title: "Goryeo Dynasty",
        description: "Unified Korean kingdom, origin of name 'Korea,' known for celadon pottery and printing innovations."
      },
      {
        date: "1392-1897",
        title: "Joseon Dynasty",
        description: "Longest-ruling Korean dynasty, adopts Confucianism, creates Hangul alphabet, and establishes enduring cultural traditions."
      },
      {
        date: "1910-1945",
        title: "Japanese Colonial Period",
        description: "Japan annexes Korea, imposing harsh rule while modernizing infrastructure, ending with Japan's WWII defeat."
      },
      {
        date: "1945",
        title: "Division of Korea",
        description: "Korea divided at 38th parallel between Soviet and American occupation zones, leading to separate governments."
      },
      {
        date: "1950-1953",
        title: "Korean War",
        description: "North Korea invades South, leading to devastating war involving China and UN forces, ending in armistice."
      },
      {
        date: "1961",
        title: "Park Chung-hee Coup",
        description: "Military coup brings authoritarian but economically focused government, beginning rapid industrialization."
      },
      {
        date: "1987",
        title: "Democratic Transition",
        description: "Pro-democracy protests force political reforms, establishing South Korea as stable democratic republic."
      },
      {
        date: "1988",
        title: "Seoul Olympics",
        description: "Successful hosting of Olympics showcases South Korea's economic development and democratic progress to world."
      },
      {
        date: "1997-2000s",
        title: "Korean Wave Begins",
        description: "K-pop, K-dramas, and Korean culture gain international popularity, establishing Korea as cultural powerhouse."
      }
    ]
  },
  japan: {
    title: "History of Japan 🇯🇵",
    events: [
      {
        date: "660 BCE",
        title: "Legendary Founding",
        description: "Traditional date of Japan's founding by Emperor Jimmu, establishing continuous imperial line and Shinto traditions."
      },
      {
        date: "1185-1333",
        title: "Kamakura Shogunate",
        description: "First military government, establishing samurai class dominance and bushido culture in Japanese society."
      },
      {
        date: "1603-1868",
        title: "Tokugawa Shogunate",
        description: "Unified Japan under strict isolation policy (sakoku), bringing peace but limiting foreign contact and trade."
      },
      {
        date: "1853",
        title: "Perry's Black Ships",
        description: "Commodore Perry forces Japan to open to West, ending isolation and triggering rapid modernization."
      },
      {
        date: "1868",
        title: "Meiji Restoration",
        description: "Emperor restored to power, beginning rapid westernization and industrialization to avoid colonization."
      },
      {
        date: "1904-1905",
        title: "Russo-Japanese War",
        description: "Japan defeats major European power, establishing itself as regional power and inspiring Asian nationalism."
      },
      {
        date: "1941-1945",
        title: "World War II",
        description: "Japan attacks Pearl Harbor, conquers much of Asia-Pacific, but suffers devastating defeat and atomic bombings."
      },
      {
        date: "1945-1952",
        title: "Allied Occupation",
        description: "MacArthur leads democratic reforms, new pacifist constitution, and reconstruction of Japanese society."
      },
      {
        date: "1960s-1980s",
        title: "Economic Miracle",
        description: "Rapid economic growth makes Japan world's second-largest economy through manufacturing and technology innovation."
      },
      {
        date: "1990s-Present",
        title: "Lost Decades & Revival",
        description: "Economic stagnation followed by gradual recovery and emergence as global cultural and technological leader."
      }
    ]
  },
  greece: {
    title: "History of Greece 🇬🇷",
    events: [
      {
        date: "c. 2000–1100 BCE",
        title: "Minoan & Mycenaean Civilizations",
        description: "Early advanced societies on Crete (Minoan) and mainland Greece (Mycenaean), precursors to classical Greece."
      },
      {
        date: "c. 776 BCE",
        title: "First Olympic Games",
        description: "Traditional date for the first Olympic Games, marking the start of Panhellenic festivals."
      },
      {
        date: "490–479 BCE",
        title: "Persian Wars",
        description: "Greek city-states unite to repel Persian invasions, including battles of Marathon, Thermopylae, and Salamis."
      },
      {
        date: "431–404 BCE",
        title: "Peloponnesian War",
        description: "Prolonged conflict between Athens and Sparta, leading to the decline of Athenian power."
      },
      {
        date: "338 BCE",
        title: "Battle of Chaeronea",
        description: "Philip II of Macedon defeats Greek city-states, paving the way for Macedonian dominance."
      },
      {
        date: "336–323 BCE",
        title: "Reign of Alexander the Great",
        description: "Alexander conquers a vast empire, spreading Greek culture across the Near East and Egypt."
      },
      {
        date: "146 BCE",
        title: "Roman Conquest",
        description: "Greece falls under Roman rule, ending political independence."
      },
      {
        date: "330 CE",
        title: "Founding of Constantinople",
        description: "Constantine establishes new Roman capital, later center of Byzantine Empire."
      },
      {
        date: "1453",
        title: "Fall of Constantinople",
        description: "Ottoman Turks capture the city, ending Byzantine Empire and beginning centuries of Ottoman rule."
      },
      {
        date: "1821–1829",
        title: "Greek War of Independence",
        description: "Greeks revolt against Ottoman rule, achieving independence and founding modern Greek state."
      },
      {
        date: "1981",
        title: "Joins European Community",
        description: "Greece becomes a member of the European Economic Community (later European Union)."
      }
    ]
  },
  italy: {
    title: "History of Italy 🇮🇹",
    events: [
      {
        date: "c. 753 BCE",
        title: "Founding of Rome",
        description: "Traditional date for the founding of Rome, marking the start of Roman civilization."
      },
      {
        date: "509 BCE",
        title: "Roman Republic Established",
        description: "Rome becomes a republic, with power in the hands of elected magistrates and the Senate."
      },
      {
        date: "264–146 BCE",
        title: "Punic Wars",
        description: "Series of wars with Carthage, resulting in Roman dominance over the western Mediterranean."
      },
      {
        date: "27 BCE–476 CE",
        title: "Roman Empire",
        description: "Augustus becomes first emperor, initiating centuries of imperial expansion and cultural achievement."
      },
      {
        date: "476 CE",
        title: "Fall of Western Roman Empire",
        description: "Last emperor deposed, marking the traditional end of ancient Rome and start of the Middle Ages."
      },
      {
        date: "800 CE",
        title: "Charlemagne crowned Emperor",
        description: "Pope crowns Charlemagne, linking Italy to the Holy Roman Empire."
      },
      {
        date: "1300s–1600s",
        title: "Italian Renaissance",
        description: "Period of extraordinary cultural, artistic, and scientific achievement centered in Italian city-states."
      },
      {
        date: "1861",
        title: "Italian Unification",
        description: "Kingdom of Italy proclaimed, unifying most Italian states under one monarchy."
      },
      {
        date: "1922–1943",
        title: "Fascist Regime",
        description: "Benito Mussolini establishes dictatorship, leading Italy through WWII as part of Axis Powers."
      },
      {
        date: "1946",
        title: "Italian Republic",
        description: "Monarchy abolished by referendum; Italy becomes a republic."
      },
      {
        date: "1957",
        title: "Founding Member of EEC",
        description: "Italy helps found the European Economic Community (later European Union)."
      }
    ]
  }
};

export const countryCards: Record<string, CountryCard[]> = {
  country: [
    {
      id: "usa",
      flag: "🇺🇸",
      name: "United States",
      summary: "From colonial beginnings to global superpower, discover the founding of America, westward expansion, civil rights movement, and rise to world leadership."
    },
    {
      id: "korea",
      flag: "🇰🇷",
      name: "South Korea",
      summary: "From ancient Korean kingdoms to modern economic miracle, discover the Three Kingdoms period, Japanese occupation, division, and remarkable transformation."
    },
    {
      id: "japan",
      flag: "🇯🇵",
      name: "Japan",
      summary: "From isolated island nation to technological leader, explore samurai culture, Meiji Restoration, World War II, and post-war economic transformation."
    }
  ],
  empire: [
    {
      id: "china",
      flag: "🇨🇳",
      name: "Chinese Empires",
      summary: "From ancient dynasties to modern powerhouse, explore over 4,000 years of Chinese imperial history through the Han, Tang, Ming dynasties, and the rise of modern China."
    },
    {
      id: "uk",
      flag: "🇬🇧",
      name: "British Empire",
      summary: "From medieval kingdoms to the world's largest empire, trace Britain's evolution through the Industrial Revolution, Victorian era, and global imperial dominance."
    },
    {
      id: "france",
      flag: "🇫🇷",
      name: "French Empire",
      summary: "From medieval kingdoms to Napoleonic conquests, explore French imperial history through revolution, empire-building, and European dominance."
    }
  ],
  culture: [
    {
      id: "greece",
      flag: "🇬🇷",
      name: "Ancient Greece",
      summary: "Birthplace of Western civilization, democracy, and philosophy. Explore ancient city-states, classical culture, and the foundations of modern thought."
    },
    {
      id: "italy",
      flag: "🇮🇹",
      name: "Roman Civilization",
      summary: "From Roman Republic to Renaissance masterpiece, discover the heart of ancient civilization, artistic achievement, and cultural foundations of Europe."
    }
  ]
};