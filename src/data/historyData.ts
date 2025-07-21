export interface HistoryEvent {
  date: string;
  title: string;
  description: string;
  dynastyId?: string; // Optional link to dynasty details
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

export interface DynastyData {
  title: string;
  chineseTitle: string;
  period: string;
  introduction: string;
  chineseIntroduction: string;
  events: DynastyEvent[];
  significance: string;
  chineseSignificance: string;
}

export interface DynastyEvent {
  title: string;
  chineseTitle: string;
  content: string;
  chineseContent: string;
}

export const historyData: Record<string, CountryData> = {
  china: {
    title: "History of China 🇨🇳",
    events: [
      {
        date: "c. 2070-1600 BCE",
        title: "Xia Dynasty 夏朝",
        description: "China's first hereditary dynasty recorded in historical texts. Established after Yu the Great tamed the floods, beginning the 'family rule under heaven' system. Declined when the last ruler Jie became tyrannical and was overthrown by Tang of Shang.<br><br><strong>中文：</strong>中国史书记载的第一个世袭制王朝，大禹治水后建立，开启\"家天下\"。末代君主桀暴虐无道，被商汤推翻。",
        dynastyId: "xia"
      },
      {
        date: "1600-1046 BCE",
        title: "Shang Dynasty 商朝",
        description: "Advanced bronze civilization with the appearance of oracle bone script (China's earliest mature writing system). Flourished with sophisticated bronze working and divination practices. Fell when the cruel King Zhou was defeated by King Wu of Zhou at the Battle of Muye.<br><br><strong>中文：</strong>青铜器文明发达，甲骨文出现（中国最早成熟文字）。商纣王残暴，周武王伐纣，牧野之战后灭亡。",
        dynastyId: "shang"
      },
      {
        date: "1046-771 BCE",
        title: "Western Zhou 西周",
        description: "Established the feudal system and ritual music institutions that laid the foundation of Chinese culture. Declined when King You 'lit beacon fires to amuse his concubine,' leading to the Quanrong invasion of the capital Haojing.<br><br><strong>中文：</strong>分封制、礼乐制度奠定中华文化基础。周幽王\"烽火戏诸侯\"，犬戎攻破镐京。",
        dynastyId: "western_zhou"
      },
      {
        date: "770-256 BCE",
        title: "Eastern Zhou 东周 (Spring & Autumn, Warring States)",
        description: "Period of feudal lords competing for hegemony and the 'Hundred Schools of Thought' philosophical flowering. Included great thinkers like Confucius, Laozi, and Mencius. Eventually unified by the state of Qin.<br><br><strong>中文：</strong>春秋战国：诸侯争霸，百家争鸣，最终被秦统一。",
        dynastyId: "eastern_zhou"
      },
      {
        date: "221-206 BCE",
        title: "Qin Dynasty 秦朝",
        description: "China's first unified empire under Emperor Qin Shi Huang. Standardized writing, currency, and measurements, and built the Great Wall. Rapidly collapsed after harsh laws and heavy corvée labor led to the Chen Sheng-Wu Guang rebellion.<br><br><strong>中文：</strong>中国首个大一统王朝，统一文字、度量衡，修长城。严刑峻法、徭役繁重，陈胜吴广起义后迅速崩溃。",
        dynastyId: "qin"
      },
      {
        date: "202 BCE - 9 CE",
        title: "Western Han 西汉",
        description: "Golden age featuring the 'Rule of Wen and Jing' and Emperor Wu's territorial expansion. Opened the Silk Road for East-West trade. Declined due to external relatives' interference in politics, ending when Wang Mang usurped the throne.<br><br><strong>中文：</strong>文景之治、汉武帝开疆拓土，丝绸之路开通。外戚专权，王莽篡汉。",
        dynastyId: "western_han"
      },
      {
        date: "25-220 CE",
        title: "Eastern Han 东汉",
        description: "Restoration under Emperor Guangwu with technological advances including papermaking. Cultural and scientific development flourished. Fell due to struggles between eunuchs and external relatives, followed by the Yellow Turban Rebellion and warlord fragmentation.<br><br><strong>中文：</strong>光武中兴，科技（造纸术）与文化发展。宦官与外戚争斗，黄巾起义后军阀割据。",
        dynastyId: "eastern_han"
      },
      {
        date: "220-589 CE",
        title: "Three Kingdoms & Northern/Southern Dynasties 三国两晋南北朝",
        description: "Period of division with Wei, Shu, and Wu in a three-way standoff. Western Jin briefly reunified before the 'Five Barbarians' invasions. Era of Buddhist spread and ethnic integration between North and South.<br><br><strong>中文：</strong>魏蜀吴三国鼎立，西晋短暂统一后陷入五胡乱华，南北朝对峙。佛教传播，民族融合。",
        dynastyId: "wei_jin_southern_northern"
      },
      {
        date: "581-618 CE",
        title: "Sui Dynasty 隋朝",
        description: "Reunified China and created the imperial examination system, built the Grand Canal connecting North and South. Collapsed when Emperor Yang's excessive use of forced labor sparked widespread peasant rebellions.<br><br><strong>中文：</strong>重新统一中国，开创科举制，修大运河。隋炀帝滥用民力，农民起义灭亡。"
      },
      {
        date: "618-907 CE",
        title: "Tang Dynasty 唐朝",
        description: "Peak of Chinese civilization with the 'Reign of Zhenguan' and 'Flourishing Age of Kaiyuan.' Poetry flourished with Li Bai and Du Fu, Buddhism reached its zenith, and international influence was profound (Japanese envoys to Tang). Declined after the An Lushan Rebellion led to regional warlordism and the Huang Chao Rebellion.<br><br><strong>中文：</strong>贞观之治、开元盛世，诗歌（李白、杜甫）、佛教鼎盛，国际影响力深远（如遣唐使）。安史之乱后藩镇割据，黄巢起义加速灭亡。"
      },
      {
        date: "960-1127 CE",
        title: "Northern Song 北宋",
        description: "Economic prosperity with paper money (jiaozi) and maritime trade bureaus. Cultural achievements included Song poetry and Neo-Confucianism, but military weakness made it vulnerable. Fell to Jin Dynasty invasion, forcing retreat south.<br><br><strong>中文：</strong>经济繁荣（交子、市舶司），文化（宋词、理学），但军事积弱。"
      },
      {
        date: "1127-1279 CE",
        title: "Southern Song 南宋",
        description: "Maintained Chinese culture in southern China while developing maritime trade and technology. Eventually conquered by the expanding Mongol Yuan Dynasty despite fierce resistance.<br><br><strong>中文：</strong>偏安江南，蒙元南侵后灭亡。"
      },
      {
        date: "1271-1368 CE",
        title: "Yuan Dynasty 元朝",
        description: "Mongol-established dynasty with unprecedented territorial extent, facilitating East-West exchange (Marco Polo's travels). Declined due to ethnic oppression and financial chaos, overthrown by the Red Turban Rebellion led by Zhu Yuanzhang.<br><br><strong>中文：</strong>蒙古建立，疆域空前，东西方交流（马可·波罗）。民族压迫、财政混乱，红巾军起义推翻。"
      },
      {
        date: "1368-1644 CE",
        title: "Ming Dynasty 明朝",
        description: "Flourished under the 'Hongwu Rule' and 'Yongle Prosperity' with Zheng He's maritime expeditions and compilation of the Yongle Encyclopedia. Declined due to eunuch interference (like Wei Zhongxian), Li Zicheng's rebellion, and Manchu invasion.<br><br><strong>中文：</strong>洪武之治、永乐盛世（郑和下西洋），修《永乐大典》。宦官专权（如魏忠贤），李自成起义，清军入关。"
      },
      {
        date: "1636-1912 CE",
        title: "Qing Dynasty 清朝",
        description: "Reached territorial peak during the 'Kangxi-Qianlong Prosperity.' Declined due to isolationist policies, Opium Wars brought Western invasion, and ended with the Xinhai Revolution that terminated imperial rule.<br><br><strong>中文：</strong>康乾盛世，疆域扩大至巅峰。闭关锁国，鸦片战争后列强侵略，辛亥革命终结帝制。"
      },
      {
        date: "1912-1949",
        title: "Republic of China 中华民国",
        description: "Established after the fall of the Qing Dynasty. Marked by warlord period, Japanese invasion during WWII, and civil war between Nationalists (KMT) and Communists (CCP).<br><br><strong>中文：</strong>清朝灭亡后建立，经历军阀混战、抗日战争、国共内战。"
      },
      {
        date: "1949",
        title: "People's Republic Founded 中华人民共和国成立",
        description: "Communist Party under Mao Zedong establishes the People's Republic of China after defeating the Nationalists in the civil war, beginning the socialist transformation of China.<br><br><strong>中文：</strong>中国共产党在毛泽东领导下战胜国民党，建立中华人民共和国，开始社会主义改造。"
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

export const dynastyData: Record<string, DynastyData> = {
  xia: {
    title: "The Xia Dynasty: China's First Hereditary Dynasty",
    chineseTitle: "夏朝：中国第一个世袭制王朝",
    period: "c. 2070-1600 BCE",
    introduction: "The Xia Dynasty (c. 2070-1600 BCE) was China's first hereditary dynasty, marking the beginning of dynastic rule in Chinese civilization. While the exact historicity of the Xia Dynasty remains debated due to limited direct written records, archaeological discoveries and ancient texts provide insights into important historical events and legends from this foundational period.",
    chineseIntroduction: "夏朝是中国历史上第一个世袭制王朝，约存在于公元前2070年至前1600年。尽管夏朝的确切历史因缺乏直接文字记录而存在争议，但通过考古发现和古代文献，我们可以了解到一些重要的历史事件和典故。",
    events: [
      {
        title: "Yu the Great's Flood Control and Establishment of the Xia Dynasty",
        chineseTitle: "大禹治水与建立夏朝",
        content: "Yu the Great became the founder of the Xia Dynasty after successfully controlling the great floods that plagued ancient China. Emperor Shun abdicated the throne to Yu in recognition of his achievements. Yu employed a revolutionary approach of channeling and redirecting water rather than simply building dikes to block it. His flood control project took 13 years to complete, during which he famously \"passed by his home three times without entering,\" becoming a model of dedicated public service for future generations.<br><br>Originally, Yu planned to follow the traditional abdication system by passing power to Gao Yao and later to Bo Yi. However, after Yu's death, his son Qi seized power through force, establishing the hereditary system and marking the beginning of \"family rule under heaven\" (家天下).",
        chineseContent: "大禹因成功治理洪水而被舜帝禅让为王，成为夏朝的奠基者。他采用疏导而非堵塞的方法治水，历时13年，三过家门而不入，成为后世勤政的典范。大禹晚年原本计划禅让给皋陶和伯益，但最终其子启通过武力夺取王位，确立了世袭制，标志着\"家天下\"的开始。"
      },
      {
        title: "Qi's Establishment of Hereditary Rule",
        chineseTitle: "夏启建立世袭制",
        content: "Yu's son Qi held a grand banquet for feudal lords at Juntai (present-day Yuzhou, Henan) to establish royal authority. The You Hu clan opposed the hereditary system and refused to attend. In response, Qi launched the \"Battle of Gan\" and defeated the You Hu clan, consolidating Xia Dynasty rule. However, in his later years, Qi became corrupt and indulgent, leading to increased internal conflicts within the dynasty.",
        chineseContent: "夏启在钧台（今河南禹州）大宴诸侯，确立王权。有扈氏反对世袭制，拒绝参加，启发动\"甘之战\"击败有扈氏，巩固了夏朝的统治。启晚年生活腐化，沉迷享乐，导致夏朝内部矛盾加剧。"
      },
      {
        title: "Taikang's Loss of the Kingdom and Hou Yi's Usurpation",
        chineseTitle: "太康失国与后羿代夏",
        content: "Qi's son Taikang was dissolute and neglected state affairs. Hou Yi, leader of the Dongyi You Qiong clan, seized this opportunity to take power, an event known as \"Taikang's Loss of the Kingdom.\" Hou Yi declared himself king but similarly became obsessed with hunting and was eventually killed by his subordinate Han Zhuo. Han Zhuo then usurped the throne, forcing the Xia royal family into exile.",
        chineseContent: "启的儿子太康荒淫无度，不理朝政，东夷有穷氏首领后羿趁机夺取政权，史称\"太康失国\"。后羿自立为王，但同样沉迷狩猎，最终被其部下寒浞所杀。寒浞篡位后，夏朝王室流亡。"
      },
      {
        title: "Shaokang's Restoration",
        chineseTitle: "少康中兴",
        content: "Shaokang, the great-nephew of Taikang, built up his strength during exile and eventually united with surviving Xia loyalists to defeat Han Zhuo and restore Xia rule. This period is known as the \"Shaokang Restoration.\" During Shaokang's reign, he governed diligently and lovingly, restored agricultural production, and made the Xia Dynasty prosperous once again.",
        chineseContent: "太康的侄孙少康在流亡期间积蓄力量，最终联合夏朝遗臣击败寒浞，恢复夏朝统治，史称\"少康中兴\"。少康在位期间勤政爱民，恢复农业生产，使夏朝重新强盛。"
      },
      {
        title: "King Jie's Tyranny and Tang's Destruction of Xia",
        chineseTitle: "夏桀暴政与商汤灭夏",
        content: "The last ruler of the Xia Dynasty, King Jie (Si Lugui), was cruel and tyrannical. He favored his concubine Mo Xi, undertook massive construction projects (such as the Qing Palace and Yao Terrace), and oppressed the people, leading to widespread resentment. Tang, leader of the Shang tribe, allied with other feudal lords to campaign against King Jie. In the Battle of Mingtiao, Tang defeated the Xia army. Jie fled to Nanchao (present-day Chaohu, Anhui) where he eventually died of illness, marking the end of the Xia Dynasty.",
        chineseContent: "夏朝末代君主桀（姒履癸）荒淫残暴，宠信妺喜，大兴土木（如倾宫、瑶台），压榨百姓，导致民怨沸腾。商部落首领汤联合诸侯讨伐夏桀，在鸣条之战中击败夏军，桀逃亡南巢（今安徽巢湖）并最终病死，夏朝灭亡。"
      },
      {
        title: "Capital Cities of the Xia Dynasty",
        chineseTitle: "夏朝的都城变迁",
        content: "The Xia Dynasty moved its capital multiple times, including Yangcheng (Dengfeng, Henan), Yangzhai (Yuzhou, Henan), Zhenlun (Yanshi or Gongyi, Henan), Yuan (Jiyuan, Henan), and Laoqiu (Kaifeng, Henan). The Erlitou site is believed to be the late Xia capital \"Zhenlun\" or \"Henan City,\" though scholarly debate continues.",
        chineseContent: "夏朝都城多次迁移，包括阳城（河南登封）、阳翟（河南禹州）、斟鄩（河南偃师或巩义）、原（河南济源）、老丘（河南开封）等。二里头遗址被认为是夏朝晚期都城\"斟鄩\"或\"河南城\"，但学界仍有争议。"
      },
      {
        title: "The Casting of the Nine Tripods",
        chineseTitle: "夏铸九鼎",
        content: "Legend tells that Yu the Great or Qi cast nine tripod vessels (jiuding) symbolizing the nine provinces and royal authority. These became the source of the later idiom \"inquiring about the tripods in the Central Plains\" (问鼎中原), referring to challenging imperial authority. However, no physical evidence has been discovered archaeologically.",
        chineseContent: "传说夏禹或夏启铸造九鼎，象征九州和王权，成为后世\"问鼎中原\"的典故来源。但考古尚未发现实物证据。"
      },
      {
        title: "Long-term Confrontation with the Dongyi",
        chineseTitle: "东夷与夏朝的长期对抗",
        content: "The Dongyi tribes (including Bo Yi, Hou Yi, and Han Zhuo) maintained long-term opposition to the Xia Dynasty, even temporarily replacing Xia rule. One branch of the Dongyi with the surname Ying (ancestors of the Qin people) later migrated west and eventually unified China under the First Emperor of Qin.",
        chineseContent: "东夷部落（如伯益、后羿、寒浞）长期与夏朝对抗，甚至一度取代夏政权。东夷的一支嬴姓部落（秦人祖先）后来西迁，最终由秦始皇统一中国。"
      }
    ],
    significance: "These historical events and legends reflect the political transitions, power struggles, and relationships with neighboring tribes during the Xia Dynasty period. While some content carries legendary elements, they constitute important narratives about the formation of early Chinese states and establish foundational patterns for Chinese political culture, including concepts of mandate of heaven, dynastic cycles, and the importance of virtuous governance.",
    chineseSignificance: "这些历史和典故反映了夏朝的政治变迁、权力斗争以及与周边部族的关系，尽管部分内容带有传说色彩，但它们构成了中国早期国家形成的重要叙事，为中华政治文化奠定了基础模式。"
  },
  shang: {
    title: "The Shang Dynasty: China's First Historically Documented Dynasty",
    chineseTitle: "商朝：中国第一个有直接文字记载的王朝",
    period: "c. 1600-1046 BCE",
    introduction: "The Shang Dynasty (c. 1600-1046 BCE) was China's second hereditary dynasty, replacing the Xia Dynasty and lasting approximately 550 years. The Shang is renowned for its bronze artifacts, oracle bone script, and powerful military forces, making it the first Chinese dynasty with direct written records. The following covers the important history, figures, and legends of the Shang Dynasty.",
    chineseIntroduction: "商朝（约公元前1600年—前1046年）是中国历史上第二个世袭制王朝，取代夏朝而建立，延续约550年。商朝以青铜器、甲骨文和强大的军事力量著称，是中国历史上第一个有直接文字记载的王朝。",
    events: [
      {
        title: "Establishment and Early Development of the Shang Dynasty",
        chineseTitle: "商朝的建立与早期发展",
        content: "<strong>Tang's Destruction of the Xia Dynasty:</strong><br>Tang (King Cheng Tang), leader of the Shang tribe, was assisted by wise ministers such as Yi Yin and Zhong Hui. He allied with feudal lords to campaign against the tyrannical King Jie of Xia. In the <strong>Battle of Mingtiao</strong> (c. 1600 BCE), Tang defeated the Xia army and established the Shang Dynasty, setting up the capital at <strong>Bo</strong> (present-day Shangqiu, Henan).<br><br><strong>Yi Yin's Regency:</strong><br>Yi Yin was a founding minister of the Shang Dynasty who initially approached Tang disguised as a cook before becoming prime minister. He assisted multiple rulers including Tang, Wai Bing, Zhong Ren, and Tai Jia. When Tai Jia proved incompetent, Yi Yin exiled him to <strong>Tong Palace</strong> for three years until he repented and could be restored to the throne.",
        chineseContent: "<strong>商汤灭夏：</strong><br>商部落首领汤（成汤）在伊尹、仲虺等贤臣辅佐下，联合诸侯讨伐夏桀，在<strong>鸣条之战</strong>（约公元前1600年）中击败夏军，建立商朝，定都于<strong>亳</strong>（今河南商丘）。<br><br><strong>伊尹辅政：</strong><br>伊尹是商朝开国功臣，曾以厨师身份接近商汤，后成为宰相，辅佐汤、外丙、仲壬、太甲等多位君主，甚至因太甲昏庸而将其放逐至<strong>桐宫</strong>三年，待其悔过后才迎回。"
      },
      {
        title: "Political System of the Shang Dynasty",
        chineseTitle: "商朝的政治制度",
        content: "<strong>Succession System:</strong><br>The early Shang Dynasty primarily followed a \"brother succeeds brother\" system, gradually transitioning to \"son succeeds father\" in later periods. This led to multiple royal family conflicts, including the famous \"Nine Generations of Chaos.\"<br><br><strong>Pan Geng's Move to Yin:</strong><br>The Shang Dynasty moved its capital multiple times until <strong>Pan Geng</strong> (c. 1300 BCE) relocated to <strong>Yin</strong> (present-day Anyang, Henan). For the next 273 years, the capital remained there, which is why the Shang is also called \"Yin-Shang.\"<br><br><strong>Oracle Bone Script and Divination:</strong><br>The Shang people were deeply superstitious and consulted oracles for almost all state affairs (warfare, sacrifices, agriculture). Oracle bone script represents records of royal divination and constitutes China's earliest systematic writing system.",
        chineseContent: "<strong>兄终弟及与父死子继：</strong><br>商朝前期王位继承以\"兄终弟及\"为主，后期逐渐转向\"父死子继\"，导致多次王室内乱，如\"九世之乱\"。<br><br><strong>盘庚迁殷：</strong><br>商朝曾多次迁都，至<strong>盘庚</strong>时期（约前1300年）迁至<strong>殷</strong>（今河南安阳），此后273年未再迁都，商朝因此又称\"殷商\"。<br><br><strong>甲骨文与占卜：</strong><br>商朝人迷信鬼神，几乎所有国家大事（战争、祭祀、农事）都要占卜，甲骨文即商王占卜的记录，是中国最早的系统文字。"
      },
      {
        title: "The Golden Age of the Shang Dynasty",
        chineseTitle: "商朝的强盛时期",
        content: "<strong>Wu Ding's Prosperous Reign:</strong><br>King Wu Ding (reigned 59 years) appointed <strong>Fu Yue</strong>, a former slave, as prime minister and relied on his queen <strong>Fu Hao</strong> (China's first female general) for military campaigns. They defeated external enemies like the Qiang and Tu tribes, expanding Shang territory to unprecedented size.<br><br><strong>Queen Fu Hao:</strong><br><strong>Fu Hao</strong> was not only a military commander but also presided over religious ceremonies. Her tomb yielded 1,928 artifacts, including bronzes, jades, and the symbolic \"Fu Hao battle-axe\" representing military authority.<br><br><strong>Military Expansion:</strong><br>The Shang Dynasty frequently waged external wars. During Wu Ding's reign, a single campaign against the Qiang deployed 13,000 troops, and they conquered tribes like the Dongyi and Guifang.",
        chineseContent: "<strong>武丁盛世：</strong><br>商王武丁（在位59年）任用奴隶出身的<strong>傅说</strong>为相，并依靠王后<strong>妇好</strong>（中国首位女将军）东征西讨，击败羌方、土方等外敌，使商朝疆域空前扩大。<br><br><strong>妇好王后：</strong><br><strong>妇好</strong>：不仅是军事统帅，还主持祭祀，其墓出土1928件文物，包括青铜器、玉器和象征军权的\"妇好钺\"。<br><br><strong>军事扩张：</strong><br>商朝频繁对外征战，如武丁时期曾一次出兵1.3万人讨伐羌方，并征服东夷、鬼方等部落。"
      },
      {
        title: "Decline and Fall of the Shang Dynasty",
        chineseTitle: "商朝的衰落与灭亡",
        content: "<strong>Tyranny of King Zhou (Di Xin):</strong><br>Initially, King Zhou governed diligently, but later became obsessed with wine and women. He favored his concubine <strong>Daji</strong>, built the <strong>Deer Terrace</strong>, created <strong>pools of wine and forests of meat</strong>, and invented the cruel <strong>bronze pillar torture</strong>. He executed loyal ministers like Bi Gan (who had his heart cut out). His prolonged campaigns against the Dongyi, though victorious, depleted the state's resources, giving King Wu of Zhou the opportunity to unite feudal lords against him.<br><br><strong>Battle of Muye (1046 BCE):</strong><br>King Wu of Zhou led his army to attack the Shang capital. King Zhou hastily armed slaves for defense, but the army defected, leading to devastating defeat. King Zhou immolated himself on the Deer Terrace, ending the Shang Dynasty. The exact date of this battle, <strong>January 20, 1046 BCE</strong>, is confirmed by inscriptions on the Western Zhou bronze vessel <strong>Li Gui</strong>.",
        chineseContent: "<strong>商纣王（帝辛）的暴政：</strong><br>早期曾励精图治，但后期沉迷酒色，宠信妲己，建造<strong>鹿台</strong>、<strong>酒池肉林</strong>，并发明<strong>炮烙之刑</strong>残害忠臣（如比干被剖心）。长期征伐东夷，虽获胜但消耗国力，导致周武王趁机联合诸侯伐商。<br><br><strong>牧野之战（前1046年）：</strong><br>周武王率军进攻商都，商纣王临时武装奴隶应战，但因军队倒戈而惨败，纣王自焚于鹿台，商朝灭亡。此战时间由西周青铜器<strong>利簋</strong>铭文确认，为<strong>公元前1046年1月20日</strong>。"
      },
      {
        title: "Culture and Technology of the Shang Dynasty",
        chineseTitle: "商朝的文化与科技",
        content: "<strong>Bronze Artifacts:</strong><br>The Shang Dynasty excelled in bronze smelting technology. Representative artifacts include the <strong>Simuwu Ding</strong> (now called Houmuwu Ding, weighing 832.84 kg) and the <strong>Fu Hao Owl Zun</strong>.<br><br><strong>Astronomy and Calendar:</strong><br>The Shang Dynasty had a sophisticated calendar system using the sexagenary cycle for dating and astronomical observations, recording solar and lunar eclipses.<br><br><strong>Book of Songs - Shang Hymns:</strong><br>Records Shang history, such as the \"Mysterious Bird\" chapter describing Shang origins: \"Heaven ordered the mysterious bird to descend and give birth to Shang.\"",
        chineseContent: "<strong>青铜器：</strong><br>商朝青铜冶炼技术高超，代表器物如<strong>司母戊鼎</strong>（现称后母戊鼎，重832.84公斤）、<strong>妇好鸮尊</strong>等。<br><br><strong>天文历法：</strong><br>商朝已有较完善的历法，使用干支纪日，并观测天象记录日食、月食。<br><br><strong>《诗经·商颂》：</strong><br>记载商朝历史，如《玄鸟》篇讲述商族起源（\"天命玄鸟，降而生商\"）。"
      },
      {
        title: "Famous Legends of the Shang Dynasty",
        chineseTitle: "商朝的著名典故",
        content: "<strong>1. Tang's Prayer for Rain at Sanglin:</strong><br>During a severe drought, King Tang cut his hair and nails at Sanglin (present-day Shangqiu, Henan) and offered himself as sacrifice to pray for rain, embodying the people-first philosophy of \"ten thousand faults lie with me alone.\"<br><br><strong>2. Opening Three Sides of the Net:</strong><br>When Tang saw hunters setting nets on all four sides to catch animals, he ordered three sides removed, leaving only one, symbolizing benevolent governance.<br><br><strong>3. Yi Yin's Exile of Tai Jia:</strong><br>Yi Yin exiled the incompetent Tai Jia, who later repented and was restored as a wise ruler.<br><br><strong>4. Wu Ding's Dream of Fu Yue:</strong><br>Wu Ding claimed to have dreamed of a sage, found the slave Fu Yue, appointed him as prime minister, and ushered in a golden age.",
        chineseContent: "<strong>1. 桑林祈雨：</strong><br>商汤因大旱在桑林（今河南商丘）剪发断爪，以自身为祭品祈雨，体现\"万方有罪，在余一人\"的民本思想。<br><br><strong>2. 网开三面：</strong><br>商汤见猎人四面张网捕猎，命撤去三面，只留一面，象征仁德。<br><br><strong>3. 伊尹放太甲：</strong><br>伊尹因太甲昏庸将其放逐，待其悔过后复位，成为贤君。<br><br><strong>4. 武丁梦得傅说：</strong><br>武丁假托梦见贤人，找到奴隶傅说并任为宰相，开创盛世。"
      }
    ],
    significance: "The Shang Dynasty represents a pinnacle of early Chinese civilization. Its bronze culture, oracle bone script, and military expansion profoundly influenced later generations. Although King Zhou's tyranny led to its downfall, the Shang's political institutions (such as ministerial governance), culture (such as sacrificial traditions), and technology (such as bronze casting) laid the foundation for the Zhou Dynasty and future dynasties.",
    chineseSignificance: "商朝是中国早期文明的高峰，其青铜文化、甲骨文和军事扩张对后世影响深远。尽管纣王暴政导致灭亡，但商朝的政治制度（如宰相辅政）、文化（如祭祀传统）和科技（如青铜铸造）为周朝及后世奠定了基础。"
  },
  western_zhou: {
    title: "The Western Zhou Dynasty: Foundation of Chinese Civilization",
    chineseTitle: "西周：中华文明的奠基时代",
    period: "1046-771 BCE",
    introduction: "The Western Zhou Dynasty (1046-771 BCE) was the first phase of Zhou rule and one of the most formative periods in Chinese history. Lasting 275 years, it established fundamental political, social, and cultural institutions that would shape Chinese civilization for millennia. The Western Zhou created the feudal system, ritual-music culture, and the concept of the Mandate of Heaven.",
    chineseIntroduction: "西周（前1046—前771年）是周朝的第一阶段，也是中国历史上最具奠基意义的时期之一。历时275年，建立了影响中华文明数千年的基本政治、社会和文化制度。西周创立了分封制、礼乐文化和天命观念。",
    events: [
      {
        title: "King Wu's Conquest of Shang and Establishment of Western Zhou",
        chineseTitle: "武王伐纣与西周建立",
        content: "King Wu of Zhou (Ji Fa) allied with feudal lords and defeated the tyrannical King Zhou of Shang at the <strong>Battle of Muye</strong> (1046 BCE). This decisive victory established the Zhou Dynasty with its capital at <strong>Haojing</strong> (present-day Xi'an, Shaanxi). King Zhou of Shang immolated himself on his palace tower, ending over 500 years of Shang rule. The victory was attributed to Zhou's moral superiority and the Shang's loss of the Mandate of Heaven.<br><br>The Zhou introduced the revolutionary concept of the <strong>Mandate of Heaven</strong> (天命), declaring that rulers governed by divine authority, but this mandate could be withdrawn if they became corrupt or tyrannical. This provided both legitimacy for Zhou rule and a philosophical framework for future dynastic changes, becoming a cornerstone of Chinese political philosophy.",
        chineseContent: "周武王（姬发）联合诸侯在<strong>牧野之战</strong>（前1046年）击败暴虐的商纣王，建立周朝，定都<strong>镐京</strong>（今陕西西安）。商纣王在宫殿上自焚而死，结束了商朝500多年的统治。这一胜利被归因于周的道德优越性和商朝失去天命。<br><br>周朝提出了革命性的<strong>天命</strong>概念，宣称统治者受命于天，但如果变得腐败或暴虐，天命可被收回。这既为周朝统治提供了合法性，也为后世朝代更替提供了哲学框架，成为中国政治哲学的基石。"
      },
      {
        title: "Feudal System and Clan System Implementation",
        chineseTitle: "分封制与宗法制的实施",
        content: "King Wu implemented the policy of \"enfeoffing relatives and meritorious officials to serve as shields for Zhou\" (封建亲戚，以藩屏周). Major fiefs included: <strong>Jiang Shang (Duke of Qi)</strong> granted the state of Qi in present-day Shandong, <strong>Duke of Zhou</strong> received the state of Lu in Shandong, <strong>Duke of Shao</strong> established the state of Yan near present-day Beijing, and brothers and sons of the royal family were granted various territories. This created a hierarchical network of vassal states that owed military service and tribute to the Zhou king while maintaining local autonomy.<br><br>The Zhou established a sophisticated clan system based on <strong>primogeniture</strong> (嫡长子继承制): The Zhou king was the supreme patriarch of all Zhou clans, eldest sons inherited titles and main responsibilities, younger sons established cadet branches with lower ranks, family relationships determined political hierarchy, and ancestor worship unified the clan structure.",
        chineseContent: "周武王推行\"封建亲戚，以藩屏周\"政策，主要分封包括：<strong>姜尚（齐公）</strong>分封至今山东的齐国，<strong>周公</strong>获封山东的鲁国，<strong>召公</strong>建立今北京附近的燕国，王室兄弟子弟分封各地。这创建了等级制的诸侯国网络，诸侯对周王承担军事义务和贡献，同时保持地方自治。<br><br>周朝建立了基于<strong>嫡长子继承制</strong>的复杂宗法体系：周王是所有周族的最高宗主，长子继承爵位和主要责任，次子建立等级较低的分支，家族关系决定政治等级，祖先崇拜统一了宗族结构。"
      },
      {
        title: "Rebellion of the Three Overseers and Duke of Zhou's Regency",
        chineseTitle: "三监之乱与周公摄政",
        content: "After King Wu's death, his young son King Cheng ascended the throne under the regency of the Duke of Zhou. <strong>Wu Geng</strong>, son of the defeated Shang king, allied with three of King Wu's brothers—<strong>Guan Shu, Cai Shu, and Huo Shu</strong>—who had been appointed as overseers of former Shang territories. They rebelled against Zhou rule, claiming the Duke of Zhou sought to usurp power. The Duke of Zhou conducted a three-year eastern campaign, decisively crushing the rebellion and executing the conspirators. This victory consolidated Zhou control over eastern China.<br><br>The <strong>Duke of Zhou</strong> (Zhou Gong Dan) also systematized ritual and musical practices that regulated all aspects of social life: <strong>Li (礼)</strong> proper behavior, ceremonies, and social protocols; <strong>Yue (乐)</strong> music and dance that expressed cosmic harmony; different ranks had specific ritual privileges; and integration of religion and politics through rituals that connected earthly rule with heavenly mandate.",
        chineseContent: "周武王死后，年幼的周成王在周公旦摄政下即位。被击败的商王之子<strong>武庚</strong>联合周武王的三个兄弟——<strong>管叔、蔡叔、霍叔</strong>（被任命为前商朝领土的监督者）叛乱，声称周公旦图谋篡位。周公旦进行了三年东征，决定性地粉碎了叛乱并处决了阴谋者。这一胜利巩固了周朝对中国东部的控制。<br><br><strong>周公旦</strong>系统化了规范社会生活各个方面的礼乐实践：<strong>礼</strong>恰当的行为、仪式和社会规范；<strong>乐</strong>表达宇宙和谐的音乐和舞蹈；不同等级有特定的礼仪特权；宗教与政治的结合，礼仪将地上统治与天命联系起来。"
      },
      {
        title: "Reigns of Cheng and Kang - The Golden Age",
        chineseTitle: "成康之治——黄金时代",
        content: "The consecutive reigns of <strong>King Cheng</strong> and <strong>King Kang</strong> (1042-996 BCE) marked the golden age of the Western Zhou. Historical records describe this period as so peaceful and well-governed that \"<strong>punishments were not used for over forty years</strong>\" (刑措四十余年不用). Key achievements included: stable succession after the Duke of Zhou's regency, expansion of Zhou territory and influence, development of agricultural productivity, flourishing of bronze craftsmanship and ritual culture, and establishment of effective administrative systems including the <strong>well-field system</strong> and the <strong>six virtues</strong> administrative evaluation standards.",
        chineseContent: "<strong>周成王</strong>和<strong>周康王</strong>的连续统治（前1042—前996年）标志着西周的黄金时代。史书记载这一时期如此和平治理良好，以至于\"<strong>刑措四十余年不用</strong>\"。主要成就包括：周公摄政后的稳定继承，周朝疆域和影响力的扩张，农业生产力的发展，青铜工艺和礼仪文化的繁荣，以及包括<strong>井田制</strong>和<strong>六廉制</strong>行政评价标准在内的有效行政体系的建立。"
      },
      {
        title: "King Zhao's Southern Campaigns and Military Decline",
        chineseTitle: "昭王南征与军事衰落",
        content: "<strong>King Zhao</strong> (995-977 BCE) conducted three major military campaigns against the <strong>Jing-Chu tribes</strong> in the south (present-day Hubei region). While the first two campaigns achieved some success, the third campaign ended in disaster. According to historical accounts, during the retreat, King Zhao's boat \"<strong>fell apart due to faulty glue</strong>\" (胶船解体) while crossing a river, and he drowned along with his army. This event significantly damaged Zhou military prestige and marked the beginning of Zhou's military decline. The failed southern campaigns also strained the Zhou's resources and weakened their control over distant territories.",
        chineseContent: "<strong>周昭王</strong>（前995—前977年）对南方的<strong>荆楚部落</strong>（今湖北地区）进行了三次大规模军事行动。前两次取得了一些成功，但第三次以灾难告终。据史书记载，在撤退过程中，昭王的船在过河时\"<strong>胶船解体</strong>\"，他与军队一起溺亡。这一事件严重损害了周朝的军事威望，标志着周朝军事力量开始衰落。失败的南征还消耗了周朝的资源，削弱了对远方领土的控制。"
      },
      {
        title: "King Mu's Western Journey and Administrative Reforms",
        chineseTitle: "穆王西游与行政改革",
        content: "<strong>King Mu</strong> (976-922 BCE) is famous for his western expeditions against the <strong>Quanrong</strong> (犬戎) tribes and his legendary meeting with the <strong>Queen Mother of the West</strong> (西王母). Historical and literary accounts describe his extensive travels, which may have reached as far as Central Asia. During his long reign, he also established the <strong>Lü Punishments</strong> (《吕刑》), an important legal code that refined Zhou judicial procedures and influenced later Chinese legal traditions. However, his frequent travels and military campaigns put strain on the state's resources and contributed to the gradual weakening of central authority.",
        chineseContent: "<strong>周穆王</strong>（前976—前922年）以其对<strong>犬戎</strong>部落的西征和与<strong>西王母</strong>的传奇会面而闻名。史书和文学作品描述了他的广泛游历，可能远达中亚。在其长期统治期间，他还制定了<strong>《吕刑》</strong>，这是一部重要的法典，完善了周朝司法程序，影响了后世中国法律传统。然而，他频繁的游历和军事行动消耗了国家资源，加剧了中央权威的逐渐削弱。"
      },
      {
        title: "Rebellion of the Countrymen and Gonghe Regency",
        chineseTitle: "国人暴动与共和行政",
        content: "<strong>King Li's</strong> tyrannical rule (878-841 BCE), including harsh taxes and suppression of criticism, triggered the first recorded popular uprising in Chinese history. The \"countrymen\" (国人)—urban residents and lower nobility—rose in rebellion, forcing King Li to flee. The <strong>Duke of Zhou</strong> and <strong>Duke of Shao</strong> jointly governed in what became known as the <strong>Gonghe Regency</strong> (共和行政, 841-828 BCE). This event marks the beginning of reliable chronological records in Chinese history (841 BCE) and demonstrated the limits of royal power. The regency period showed that effective governance could exist without a monarch, influencing later Chinese political thought.",
        chineseContent: "<strong>周厉王</strong>的暴政（前878—前841年），包括苛捐杂税和压制批评，引发了中国历史上第一次有记录的民众起义。\"国人\"——城市居民和下级贵族——起义叛乱，迫使厉王逃亡。<strong>周公</strong>和<strong>召公</strong>联合执政，史称<strong>共和行政</strong>（前841—前828年）。这一事件标志着中国历史可靠纪年的开始（前841年），并显示了王权的限度。摄政期间表明，没有君主也能实现有效治理，影响了后世中国政治思想。"
      },
      {
        title: "Playing with Fire Signals and the Fall of Western Zhou",
        chineseTitle: "烽火戏诸侯与西周灭亡",
        content: "The final collapse of the Western Zhou came under <strong>King You</strong> (781-771 BCE), who became infatuated with his concubine <strong>Bao Si</strong> (褒姒). To make her smile, he repeatedly lit the beacon fires used to summon feudal lords in emergencies, deceiving them into thinking the capital was under attack. When the <strong>Quanrong</strong> barbarians actually invaded in 771 BCE, the feudal lords, having been deceived multiple times, did not respond to the genuine call for help. King You was killed, Queen Bao Si was captured, the capital Haojing was sacked, and the Western Zhou Dynasty came to an end. This event became the famous idiom \"playing with fire signals to amuse a concubine\" (烽火戏诸侯), symbolizing the dangers of rulers who prioritize personal pleasure over state responsibility.",
        chineseContent: "西周的最终崩溃发生在<strong>周幽王</strong>（前781—前771年）统治下，他迷恋妃子<strong>褒姒</strong>。为了博她一笑，他反复点燃用于紧急召集诸侯的烽火，欺骗他们以为首都遭到攻击。当<strong>犬戎</strong>蛮族真正入侵时（前771年），多次被欺骗的诸侯们没有响应真正的求救。幽王被杀，褒姒被俘，首都镐京被攻陷，西周王朝宣告结束。这一事件成为著名的\"烽火戏诸侯\"典故，象征着统治者将个人享乐置于国家责任之上的危险。"
      }
    ],
    significance: "The Western Zhou laid the foundational framework for Chinese civilization that would persist for over two millennia. Its innovations included: Political Philosophy - the Mandate of Heaven became the standard justification for dynastic change; Social Organization - the clan system influenced Chinese family structure permanently; Cultural Practices - ritual and music traditions formed the basis of Confucian culture; Administrative Systems - the feudal system and official evaluation methods influenced later governance; and Legal Traditions - the Lü Punishments contributed to Chinese legal development. Despite its eventual collapse, the Western Zhou's institutional and cultural achievements remained central to Chinese identity and statecraft throughout imperial history.",
    chineseSignificance: "西周为中华文明奠定了延续两千多年的基础框架。其创新包括：政治哲学——天命观成为朝代更替的标准理由；社会组织——宗法制永久性地影响了中国家族结构；文化实践——礼乐传统形成了儒家文化的基础；行政制度——分封制和官员评价方法影响了后世治理；法律传统——《吕刑》对中国法律发展做出了贡献。尽管最终崩溃，西周的制度和文化成就在整个帝制历史中仍然是中国认同和治国之道的核心。"
  },
  eastern_zhou: {
    title: "The Eastern Zhou Dynasty: Fragmentation and Intellectual Flowering",
    chineseTitle: "东周：分裂与思想繁荣",
    period: "770-256 BCE",
    introduction: "The Eastern Zhou Dynasty (770-256 BCE) represents the second and final phase of Zhou rule, lasting 514 years. This period witnessed the gradual decline of central authority and the rise of powerful vassal states, culminating in China's greatest era of intellectual development. The Eastern Zhou is divided into two distinct periods: the Spring and Autumn period (770-476 BCE) and the Warring States period (475-221 BCE).",
    chineseIntroduction: "东周（前770—前256年）代表周朝统治的第二阶段和最后阶段，历时514年。这一时期见证了中央权威的逐渐衰落和强大诸侯国的崛起，最终达到中国最伟大的思想发展时代。东周分为两个不同时期：春秋时期（前770—前476年）和战国时期（前475—前221年）。",
    events: [
      {
        title: "King Ping's Eastern Move and the Beginning of Eastern Zhou",
        chineseTitle: "平王东迁与东周开端",
        content: "After the fall of Western Zhou and the death of King You, the feudal lords installed his son <strong>King Ping</strong> on the throne and moved the capital eastward to <strong>Luoyi</strong> (洛邑, present-day Luoyang, Henan) in 770 BCE. This move marked the beginning of the Eastern Zhou period, but the royal authority was drastically weakened: The Zhou royal domain was reduced to a small territory around Luoyang, many original Zhou lands in the west were lost to barbarian tribes, the king became increasingly dependent on powerful feudal lords, and royal prestige and military power declined significantly. The move eastward was both a practical necessity and a symbolic end to Zhou's golden age.",
        chineseContent: "西周灭亡、周幽王死后，诸侯立其子<strong>周平王</strong>为王，并将都城东迁至<strong>洛邑</strong>（今河南洛阳）。这一迁移标志着东周时期的开始，但王室权威急剧削弱：周王室领土缩减为洛阳周围的小片区域，西部许多原周朝土地被蛮族夺取，周王日益依赖强大的诸侯，王室威望和军事力量显著衰落。东迁既是实际需要，也象征着周朝黄金时代的结束。"
      },
      {
        title: "The Spring and Autumn Period and the Five Hegemons",
        chineseTitle: "春秋时期与五霸",
        content: "During the Spring and Autumn period (770-476 BCE), powerful vassal states competed for dominance while nominally respecting Zhou suzerainty under the principle of \"<strong>honoring the king and expelling barbarians</strong>\" (尊王攘夷). The most notable leaders became known as the <strong>Five Hegemons of Spring and Autumn</strong> (春秋五霸): <strong>Duke Huan of Qi</strong> (齐桓公, r. 685-643 BCE), the first hegemon with minister Guan Zhong implementing economic reforms; <strong>Duke Wen of Jin</strong> (晋文公, r. 636-628 BCE), restored after 19 years in exile and defeated Chu at Chengpu; <strong>Duke Xiang of Song</strong> (宋襄公, r. 650-637 BCE), known for his adherence to ritual warfare ethics; <strong>King Zhuang of Chu</strong> (楚庄王, r. 613-591 BCE), a southern power who \"inquired about the tripods\"; and <strong>Duke Mu of Qin</strong> (秦穆公, r. 659-621 BCE), who expanded westward and established Qin power.",
        chineseContent: "春秋时期（前770—前476年），强大的诸侯国在名义上尊重周朝宗主权的同时，以\"<strong>尊王攘夷</strong>\"的原则争夺主导地位。最杰出的领导者被称为<strong>春秋五霸</strong>：<strong>齐桓公</strong>（前685-643年在位），第一位霸主，在管仲辅佐下实施经济改革；<strong>晋文公</strong>（前636-628年在位），流亡19年后复国，在城濮击败楚国；<strong>宋襄公</strong>（前650-637年在位），以坚持礼制战争伦理著称；<strong>楚庄王</strong>（前613-591年在位），南方强权，曾\"问鼎中原\"；<strong>秦穆公</strong>（前659-621年在位），向西扩张，确立秦国实力。"
      },
      {
        title: "The Warring States Period and the Seven Powers",
        chineseTitle: "战国时期与七雄",
        content: "The Warring States period (475-221 BCE) began with the <strong>partition of Jin</strong> among three powerful families (<strong>Han, Zhao, and Wei</strong>), marking the complete breakdown of the feudal order. Seven major powers dominated this era: <strong>Qin</strong> (秦), located in the west and eventually unified China; <strong>Chu</strong> (楚), a large southern state with vast territory; <strong>Zhao</strong> (赵), a northern state known for cavalry warfare; <strong>Wei</strong> (魏), a central state initially the strongest after Jin's partition; <strong>Han</strong> (韩), smallest of the seven located in central China; <strong>Yan</strong> (燕), a northern state farthest from the Zhou heartland; and <strong>Qi</strong> (齐), an eastern maritime power with commercial strength. During this period, the Zhou royal house controlled only a tiny territory around Luoyang, reduced to the status of a minor local power.",
        chineseContent: "战国时期（前475—前221年）始于<strong>三家分晋</strong>（<strong>韩、赵、魏</strong>），标志着分封秩序的彻底崩溃。七个主要强国主导了这个时代：<strong>秦</strong>，位于西部，最终统一中国；<strong>楚</strong>，南方大国，疆域辽阔；<strong>赵</strong>，北方国家，以骑兵战术著称；<strong>魏</strong>，中原国家，晋分裂后初期最强；<strong>韩</strong>，七国中最小，位于中国中部；<strong>燕</strong>，北方国家，距离周朝核心最远；<strong>齐</strong>，东方海洋强国，商业实力雄厚。在此期间，周王室仅控制洛阳周围的极小领土，沦为地方小国。"
      },
      {
        title: "The Hundred Schools of Thought - Confucianism and Daoism",
        chineseTitle: "百家争鸣——儒家与道家",
        content: "The political fragmentation of the Eastern Zhou paradoxically produced China's greatest intellectual flowering, known as the <strong>Hundred Schools of Thought</strong> (百家争鸣). <strong>Confucianism</strong> (儒家), founded by <strong>Confucius</strong> (孔子, 551-479 BCE), emphasized key concepts of Ren (仁, benevolence), Li (礼, ritual propriety), and education, with the goal of restoring social harmony through moral cultivation. It was later developed by Mencius (孟子) and Xunzi (荀子). <strong>Daoism</strong> (道家), attributed to the legendary <strong>Laozi</strong> (老子), focused on key concepts of Dao (道, the Way), Wu wei (无为, non-action), and natural harmony, with the goal of living in accordance with natural order. It was further developed by Zhuangzi (庄子). Both schools profoundly influenced Chinese civilization for millennia.",
        chineseContent: "东周的政治分裂矛盾地产生了中国最伟大的思想繁荣，被称为<strong>百家争鸣</strong>。<strong>儒家</strong>由<strong>孔子</strong>（前551-479年）创立，强调仁、礼、教育等核心概念，目标是通过道德修养恢复社会和谐，后由孟子、荀子发展。<strong>道家</strong>归因于传说中的<strong>老子</strong>，专注于道、无为、自然和谐等核心概念，目标是按照自然秩序生活，由庄子进一步发展。两个学派都深刻影响了中华文明数千年。"
      },
      {
        title: "Legalism and Mohism - Alternative Philosophical Approaches",
        chineseTitle: "法家与墨家——替代哲学方法",
        content: "<strong>Legalism</strong> (法家) emerged as a pragmatic school with key figures including <strong>Shang Yang</strong> (商鞅) and <strong>Han Feizi</strong> (韩非子). Its key concepts included strict laws, punishments, and centralized authority, with the goal of creating a powerful, unified state through rigid control. This philosophy was ultimately adopted by the Qin state for unification. <strong>Mohism</strong> (墨家), founded by <strong>Mozi</strong> (墨子), emphasized universal love, meritocracy, and frugality, with the goal of promoting general welfare through practical governance. These schools, along with others, competed in the intellectual marketplace, each offering solutions to the political and social chaos of the times.",
        chineseContent: "<strong>法家</strong>作为实用主义学派出现，关键人物包括<strong>商鞅</strong>和<strong>韩非子</strong>。其核心概念包括严法、刑罚和中央集权，目标是通过严格控制创建强大统一的国家。这一哲学最终被秦国采用以统一中国。<strong>墨家</strong>由<strong>墨子</strong>创立，强调兼爱、任人唯贤和节俭，目标是通过实用治理促进普遍福利。这些学派与其他学派在思想市场上竞争，各自为时代的政治社会混乱提供解决方案。"
      },
      {
        title: "Military and Social Transformations",
        chineseTitle: "军事与社会变革",
        content: "The Warring States period witnessed revolutionary changes in military technology and social organization. <strong>Military innovations</strong> included iron weapons replacing bronze, making warfare more deadly; cavalry units becoming crucial, especially for northern states like Zhao; crossbows providing infantry with greater firepower; large armies with some battles involving hundreds of thousands of soldiers; and professional standing armies replacing seasonal militias. <strong>Social changes</strong> included the rise of meritocracy where talent began to matter more than birth, economic development with intensified agriculture and expanded commerce, legal reforms with written law codes replacing aristocratic privilege, and administrative centralization with more sophisticated bureaucracy developing across the states.",
        chineseContent: "战国时期见证了军事技术和社会组织的革命性变化。<strong>军事创新</strong>包括：铁制武器取代青铜器，使战争更加致命；骑兵部队变得关键，特别是对于赵国等北方国家；弩为步兵提供了更大的火力；大规模军队，一些战役涉及数十万士兵；职业常备军取代了季节性民兵。<strong>社会变化</strong>包括：任人唯贤的兴起，才能开始比出身更重要；经济发展，农业集约化和商业扩张；法律改革，成文法典取代贵族特权；行政集权，各国发展了更加复杂的官僚体系。"
      },
      {
        title: "Rebellion of Prince Zhao and the Loss of Royal Archives",
        chineseTitle: "王子朝之乱与王室典籍流失",
        content: "One of the most significant crises of the Eastern Zhou occurred in 520 BCE when <strong>King Jing</strong> died, leading to a succession dispute between <strong>Prince Zhao</strong> (王子朝) and the future <strong>King Jing</strong>. This civil war had catastrophic consequences: Prince Zhao initially gained control of the capital and royal archives, the conflict lasted several years and further weakened royal authority, and when Prince Zhao was eventually defeated, he <strong>fled to Chu state carrying the Zhou royal archives</strong> with him. This resulted in the <strong>loss of numerous important historical documents</strong> and royal records, demonstrating how even the Zhou royal family was subject to the power struggles that characterized the period. The rebellion marked another step in the Zhou dynasty's inexorable decline toward irrelevance.",
        chineseContent: "东周最重大的危机之一发生在前520年<strong>周景王</strong>死后，导致<strong>王子朝</strong>与未来的<strong>周敬王</strong>之间的继承争端。这场内战产生了灾难性后果：王子朝最初控制了都城和王室档案，冲突持续数年，进一步削弱了王室权威，王子朝最终被击败后，<strong>携带周王室典籍逃往楚国</strong>。这导致了<strong>大量重要历史文献和王室记录的流失</strong>，表明连周王室家族也受到了这一时期特征性权力斗争的影响。这次叛乱标志着周朝向无关紧要地位不可阻挡衰落的又一步。"
      },
      {
        title: "The End of the Zhou Dynasty and Qin's Final Conquest",
        chineseTitle: "周朝的终结与秦的最终征服",
        content: "The Zhou Dynasty's end came not through dramatic battle but through quiet absorption into the expanding Qin state. In <strong>256 BCE</strong>, Qin armies conquered the small <strong>Western Zhou state</strong> (one of two remaining Zhou territories), and <strong>King Nan</strong> (周赧王) died of illness, ending the main Zhou royal line. The Zhou Dynasty existed in name only after this point. In <strong>249 BCE</strong>, Qin eliminated the final <strong>Eastern Zhou state</strong> territory, completely ending any Zhou political entity and making the last vestiges of Zhou independence disappear. The fall was more symbolic than practical, as the Zhou had been powerless for centuries. However, it marked the end of the longest dynasty in Chinese history and cleared the way for Qin's unification of China under the First Emperor.",
        chineseContent: "周朝的终结不是通过戏剧性的战斗，而是通过被扩张的秦国悄然吸收。<strong>前256年</strong>，秦军征服了小小的<strong>西周国</strong>（两个残余周朝领土之一），<strong>周赧王</strong>病死，结束了主要的周王室血脉。此后周朝仅存在于名义上。<strong>前249年</strong>，秦国消灭了最后的<strong>东周国</strong>领土，彻底结束了任何周朝政治实体，使周朝独立的最后痕迹消失。这一灭亡更多是象征性而非实际意义，因为周朝已经无力数百年。然而，它标志着中国历史上最长王朝的终结，为秦始皇统一中国扫清了道路。"
      }
    ],
    significance: "The Eastern Zhou period's greatest legacy lies in its intellectual achievements that established the philosophical foundations for Chinese civilization. Despite political fragmentation, this era produced lasting institutional and cultural innovations including: the development of bureaucratic administration, meritocratic recruitment, centralized governance models, and sophisticated legal systems. The Hundred Schools of Thought created a rich intellectual synthesis that, while politically fragmented, established the philosophical and cultural frameworks that would unite China for millennia. The competing philosophies of Confucianism, Daoism, Legalism, and Mohism continued to influence Chinese thought throughout imperial history, making the Eastern Zhou China's 'Axial Age' of fundamental philosophical breakthrough.",
    chineseSignificance: "东周时期最大的遗产在于其思想成就，为中华文明建立了哲学基础。尽管政治分裂，这一时代产生了持久的制度和文化创新，包括：官僚行政、任人唯贤、中央集权模式和复杂法律体系的发展。百家争鸣创造了丰富的思想综合，虽然政治上分裂，但建立了将在数千年内统一中国的哲学和文化框架。儒家、道家、法家、墨家等竞争哲学在整个帝制历史中继续影响中国思想，使东周成为中国根本哲学突破的\"轴心时代\"。"
  },
  qin: {
    title: "The Qin Dynasty: China's First Unified Empire",
    chineseTitle: "秦朝：中国第一个统一的中央集权制王朝",
    period: "221-207 BCE",
    introduction: "The Qin Dynasty (221-207 BCE) was China's first unified centralized imperial dynasty, established by the First Emperor of Qin (Ying Zheng), ending over 500 years of fragmentation since the Spring and Autumn period. Although the Qin Dynasty lasted only 15 years, its political, military, and cultural institutions had profound and lasting influence on subsequent Chinese history.",
    chineseIntroduction: "秦朝（前221年—前207年）是中国历史上第一个统一的中央集权制王朝，由秦始皇（嬴政）建立，结束了春秋战国以来500多年的分裂局面。尽管秦朝仅存续15年，但其政治、军事、文化制度对后世影响深远。",
    events: [
      {
        title: "Conquest of the Six States and Establishment of Empire",
        chineseTitle: "灭六国与建立帝制",
        content: "The First Emperor of Qin adopted the strategy of \"befriending distant states while attacking nearby ones\" (远交近攻) to systematically conquer the six remaining warring states: <strong>Destruction of Han (230 BCE)</strong> by General Neishi Teng; <strong>Destruction of Zhao (228 BCE)</strong> by General Wang Jian at Handan; <strong>Destruction of Yan (226 BCE)</strong> after capturing capital Ji; <strong>Destruction of Wei (225 BCE)</strong> by flooding Daliang with Yellow River waters; <strong>Destruction of Chu (223 BCE)</strong> by Wang Jian's 600,000 troops; and <strong>Destruction of Qi (221 BCE)</strong> through surrender. After completing unification, Ying Zheng adopted the title <strong>\"First Emperor\"</strong> (始皇帝), establishing the imperial system with divine authority, hereditary succession, and absolute power that would govern China for over 2,000 years.",
        chineseContent: "秦始皇采用\"远交近攻\"策略，依次灭六国：<strong>灭韩</strong>（前230年）内史腾攻韩；<strong>灭赵</strong>（前228年）王翦破邯郸；<strong>灭燕</strong>（前226年）攻破蓟城；<strong>灭魏</strong>（前225年）王贲引黄河水灌大梁；<strong>灭楚</strong>（前223年）王翦率60万大军；<strong>灭齐</strong>（前221年）齐王建不战而降。完成统一后，嬴政改称<strong>\"始皇帝\"</strong>，建立了具有神圣权威、世袭传承和绝对权力的皇帝制度，统治中国2000多年。"
      },
      {
        title: "Centralized Government and Prefecture-County System",
        chineseTitle: "中央集权与郡县制",
        content: "The Qin Dynasty abolished the feudal system and implemented a centralized bureaucratic government. The <strong>Prefecture-County System</strong> (郡县制) divided the empire into 36 prefectures (later expanded to over 40), each containing multiple counties, with governors and magistrates appointed by the emperor and dismissible at will. This replaced hereditary feudal lords with professional bureaucrats. The <strong>Three Chancellors and Nine Ministers</strong> (三公九卿制) system included the Chancellor (丞相) as chief administrative officer, Imperial Commandant (太尉) as supreme military commander, and Imperial Censor (御史大夫) as head of supervision, plus Nine Ministers handling specialized state functions. This created checks and balances while ensuring all power ultimately flowed from the emperor.",
        chineseContent: "秦朝废除分封制，实行中央集权的官僚政府。<strong>郡县制</strong>将全国设36郡（后增至40余郡），每郡下设若干县，郡守和县令由皇帝任免，可随时罢黜，以职业官僚取代世袭封建领主。<strong>三公九卿制</strong>包括丞相为首席行政官，太尉为最高军事指挥官，御史大夫为监察首脑，加上九卿负责专门国家职能。这建立了制衡机制，同时确保所有权力最终来自皇帝。"
      },
      {
        title: "Standardization Policies and Cultural Unification",
        chineseTitle: "标准化政策与文化统一",
        content: "The Qin Dynasty implemented comprehensive standardization to unify diverse regions: <strong>Currency Unification</strong> introduced the circular \"Qin banliang\" (秦半两) coin with square hole, facilitating trade and economic integration. <strong>Weights and Measures</strong> established standard units for length (chi 尺), volume (dou 斗), and weight (cheng 秤) with severe penalties for non-compliance. <strong>Writing System</strong> - Li Si created \"Small Seal Script\" (小篆) as official writing, later promoting \"Clerical Script\" (隶书) for daily use, eliminating regional variations and laying the foundation for Chinese written unity. <strong>Transportation</strong> - \"Same-gauge carriages\" (车同轨) standardized axle width for all vehicles, creating the world's first standardized transportation network and enabling efficient movement across the empire.",
        chineseContent: "秦朝实施全面标准化以统一各地区：<strong>货币统一</strong>推行圆形方孔\"秦半两\"钱币，促进贸易和经济一体化。<strong>度量衡</strong>建立长度（尺）、容积（斗）、重量（秤）标准单位，使用非标准测量严厉处罚。<strong>文字制度</strong>——李斯创立\"小篆\"作为官方文字，后推广\"隶书\"供日常使用，消除地区文字差异，奠定中国书面语言统一基础。<strong>交通运输</strong>——\"车同轨\"统一所有车辆轴距宽度，创造世界第一个标准化交通网络，实现帝国内高效运输。"
      },
      {
        title: "Harsh Legal System and Burning of Books",
        chineseTitle: "严苛法律制度与焚书坑儒",
        content: "The Qin Dynasty governed through Legalist philosophy with harsh laws and severe punishments. The <strong>Qin Legal Code</strong> (《秦律》) followed \"light crimes, heavy punishments\" (轻罪重罚), implemented <strong>Collective Responsibility</strong> (连坐) where family members and neighbors could be punished for one person's crime, and <strong>Clan Extermination</strong> (族诛) for serious crimes. The <strong>Burning of Books and Burying of Scholars</strong> (焚书坑儒, 213-212 BCE) systematically eliminated competing ideologies by burning non-official texts and burying alive over 460 scholars and alchemists who criticized the government. Only practical texts on medicine, agriculture, and divination were preserved. This represented systematic thought control and intellectual suppression that created fear-based governance.",
        chineseContent: "秦朝以法家思想治国，推行严刑峻法。<strong>《秦律》</strong>采用\"轻罪重罚\"原则，实行<strong>连坐</strong>制（一人犯罪，家人邻里可受牵连）和<strong>族诛</strong>（重罪可导致整个家族被处决）。<strong>焚书坑儒</strong>（前213—前212年）通过焚烧非官方典籍和活埋460余名批评政府的学者方士，系统性消除竞争思想。只保留医学、农业、占卜等实用文本。这代表了系统性思想控制和知识分子压制，创造了基于恐惧的治理。"
      },
      {
        title: "Military Campaigns and Engineering Projects",
        chineseTitle: "军事征伐与工程建设",
        content: "After unification, the Qin launched major military campaigns and construction projects. <strong>Northern Campaign Against Xiongnu</strong>: General Meng Tian led 300,000 troops against nomads, recovered the Ordos Loop region, and connected/extended defensive walls of former states to create the Great Wall foundation. <strong>Southern Campaign Against Baiyue</strong>: Generals Tu Sui and Zhao Tuo led 500,000 troops to conquer southern China, establishing three new prefectures and extending control to present-day Guangdong, Guangxi, and northern Vietnam. <strong>Major Construction</strong> included the planned but unfinished Epang Palace (阿房宫), the First Emperor's Mausoleum (骊山陵) with the famous Terracotta Army, the Lingqu Canal connecting river systems, and the Imperial Highway System (驰道) radiating from capital Xianyang.",
        chineseContent: "统一后，秦朝发动重大军事行动和建设项目。<strong>北击匈奴</strong>：蒙恬率30万大军北伐游牧民族，收复河套地区，连接并扩建原各国长城创立长城基础。<strong>南征百越</strong>：屠睢、赵佗率50万大军征服南方，设立三郡，将控制扩展到今广东、广西、北越。<strong>重大建设</strong>包括计划但未完成的阿房宫，秦始皇陵（骊山陵）和著名的兵马俑，连接河流系统的灵渠，以及以咸阳为中心的驰道系统。"
      },
      {
        title: "Oppressive Policies and Popular Suffering",
        chineseTitle: "压迫政策与民众痛苦",
        content: "The Qin Dynasty's harsh policies created widespread suffering despite achieving unification. <strong>Excessive Corvée Labor</strong> involved massive conscription for building projects (Great Wall, roads, palaces, imperial tomb) with millions of peasants forced to work under harsh conditions, many dying from exhaustion and disease while agricultural production declined. <strong>Strict Legal Penalties</strong> meant minor infractions resulted in severe punishments, collective punishment systems terrorized communities, and thought control through book burning created an atmosphere of fear. <strong>Heavy Taxation</strong> was needed to fund military campaigns and construction projects, with tribute demands from conquered territories and property confiscation for state projects spreading economic hardship throughout the empire.",
        chineseContent: "秦朝的严酷政策虽然实现了统一，但造成了广泛痛苦。<strong>过度徭役</strong>涉及大规模征召建设项目（长城、道路、宫殿、皇陵），数百万农民被迫在恶劣条件下工作，许多人死于疲劳和疾病，农业生产下降。<strong>严厉法律处罚</strong>意味着轻微违法导致严重惩罚，连坐制度恐吓社区，通过焚书坑儒进行思想控制创造恐惧氛围。<strong>沉重税收</strong>用于资助军事行动和建设项目，对被征服地区的贡献要求和为国家项目没收财产，经济困难遍及全国。"
      },
      {
        title: "Second Emperor's Incompetence and Court Corruption",
        chineseTitle: "秦二世的昏庸与宫廷腐败",
        content: "After the First Emperor's death in 210 BCE, the dynasty deteriorated under poor leadership. <strong>Hu Hai's Succession</strong>: Hu Hai (胡亥) became Second Emperor through palace intrigue, lacking his father's political skills and easily manipulated by court officials. <strong>Zhao Gao's Dominance</strong>: Chief eunuch Zhao Gao (赵高) gained control over the Second Emperor, eliminated rivals through false accusations and executions, and corrupted administration through nepotism. The famous <strong>\"Pointing to a Deer and Calling It a Horse\"</strong> (指鹿为马) incident demonstrated how fear corrupted truth - Zhao Gao tested his power by presenting a deer as a horse, rewarding those who agreed and eliminating those who contradicted him. This led to loss of central control as regional governors acted independently and military commanders lost confidence in imperial leadership.",
        chineseContent: "始皇帝于前210年死后，王朝在糟糕领导下恶化。<strong>胡亥继位</strong>：胡亥通过宫廷阴谋成为二世皇帝，缺乏父亲的政治技能，易受朝臣操纵。<strong>赵高专权</strong>：首席宦官赵高控制二世皇帝，通过虚假指控和处决消除对手，通过任人唯亲腐蚀行政。著名的<strong>\"指鹿为马\"</strong>事件展示了恐惧如何腐蚀真理——赵高通过献鹿称马测试权力，奖励同意者，消除反对者。这导致中央控制丧失，地方长官独立行动，军事指挥官对帝国领导失去信心。"
      },
      {
        title: "The Dazexiang Uprising and Dynasty's Collapse",
        chineseTitle: "大泽乡起义与王朝崩溃",
        content: "The Qin Dynasty's end began with the <strong>Dazexiang Uprising</strong> (209 BCE). <strong>Chen Sheng and Wu Guang</strong>, leading 900 peasant conscripts to frontier duty, were delayed by floods and faced execution for arriving late. They chose rebellion over certain death, declaring \"Kings, dukes, generals, and ministers—are they born to their stations?\" This revolutionary slogan challenged hereditary rule and sparked rebellion across central China. <strong>Xiang Yu and Liu Bang</strong> emerged as key rebel leaders. Xiang Yu's decisive victory at the Battle of Julu (207 BCE) defeated the main Qin army, while Liu Bang entered Xianyang first and accepted the surrender of Ziying (子婴), the last Qin ruler. The dynasty ended not through great battle but peaceful surrender, demonstrating how hollow the empire had become after only 15 years.",
        chineseContent: "秦朝的终结始于<strong>大泽乡起义</strong>（前209年）。<strong>陈胜吴广</strong>率领900名农民应征者去边境服役，因洪水延误面临迟到处决。他们选择叛乱而非必死，宣称\"王侯将相，宁有种乎？\"这一革命口号挑战世袭统治，在中国中部引发叛乱。<strong>项羽和刘邦</strong>成为关键叛乱领袖。项羽在巨鹿之战（前207年）的决定性胜利击败秦军主力，而刘邦首先进入咸阳，接受最后一位秦统治者子婴的投降。王朝的终结不是通过大战而是和平投降，显示了帝国在仅15年后变得多么空虚。"
      }
    ],
    significance: "The Qin Dynasty represents history's greatest paradox: achieving unprecedented unification and establishing lasting institutions, yet collapsing almost immediately due to harsh methods. Its achievements included creating the first unified Chinese empire, establishing governmental institutions that lasted millennia, standardizing language/currency/measurements, building connecting infrastructure, and demonstrating centralized organization power. However, excessive authoritarianism alienated the population, intellectual suppression eliminated valuable counsel, harsh labor policies created widespread suffering, rapid changes disrupted stability, and succession crisis exposed institutional weaknesses. The dynasty's brief but transformative reign taught future Chinese rulers that lasting power comes not from fear alone, but from earning the consent and support of the governed, requiring balance between innovation and respect for human welfare and cultural continuity.",
    chineseSignificance: "秦朝代表了历史上最大的悖论：实现了前所未有的统一并建立了持久制度，却因严酷方法几乎立即崩溃。其成就包括创建第一个统一的中华帝国，建立了延续数千年的政府制度，标准化语言、货币、度量衡，建造连接基础设施，展示中央集权组织力量。然而，过度专制疏远了人民，知识压制消除了宝贵建议，严酷劳动政策造成广泛痛苦，快速变化破坏稳定，继承危机暴露制度弱点。王朝短暂但变革性的统治教导未来中国统治者，持久权力不仅来自恐惧，而是来自赢得被统治者的同意和支持，需要平衡创新与尊重人类福利和文化连续性。"
  },
  western_han: {
    title: "The Western Han Dynasty: Foundation of Han Civilization",
    chineseTitle: "西汉：汉族文明的奠基",
    period: "202 BCE - 8 CE",
    introduction: "The Western Han Dynasty (202 BCE - 8 CE) was the first phase of Han rule and one of China's most prosperous and influential periods. Lasting 210 years, it established the foundation of Han ethnic identity and created political, cultural, and economic systems that would shape Chinese civilization for over two millennia. The Western Han succeeded the short-lived Qin Dynasty and became synonymous with Chinese cultural identity.",
    chineseIntroduction: "西汉（前202年—8年）是汉朝统治的第一阶段，也是中国历史上最繁荣和最具影响力的时期之一。历时210年，奠定了汉民族认同的基础，创建了影响中华文明两千多年的政治、文化和经济制度。西汉承继短暂的秦朝，成为中华文化认同的象征。",
    events: [
      {
        title: "The Chu-Han Contention and Foundation of Han",
        chineseTitle: "楚汉之争与汉朝建立",
        content: "After the fall of the Qin Dynasty, China entered a period of civil war between <strong>Liu Bang</strong> (刘邦) and <strong>Xiang Yu</strong> (项羽). This four-year struggle would determine the future of Chinese civilization. The decisive <strong>Battle of Gaixia (202 BCE)</strong> saw Liu Bang's forces surround Xiang Yu's army. Hearing Chu songs from all directions, Xiang Yu realized his defeat was inevitable and committed suicide, ending the contention. Liu Bang established the Han Dynasty with its capital at <strong>Chang'an</strong> (present-day Xi'an). This victory established the pattern of Chinese unification under a single dynasty and demonstrated that merit could triumph over birth in Chinese politics. Liu Bang (Emperor Gaozu) then implemented pragmatic <strong>Huang-Lao Governance</strong> (黄老之治), combining Daoist \"non-action\" with practical administration, reducing taxes and corvée labor to minimal levels, and encouraging agricultural recovery.",
        chineseContent: "秦朝灭亡后，中国进入了**刘邦**和**项羽**之间的内战时期。这场四年的斗争将决定中华文明的未来。决定性的**垓下之战（前202年）**中，刘邦军队包围项羽军队。项羽听到四面楚歌，意识到败局已定，自杀结束争霸。刘邦建立汉朝，定都**长安**（今西安）。这一胜利确立了中国在单一王朝下统一的模式，证明了在中国政治中才能可以战胜出身。刘邦（汉高祖）随后实施务实的**黄老之治**，结合道家\"无为\"与实际行政，将税收和徭役减至最低水平，鼓励农业恢复。"
      },
      {
        title: "The Lü Clan Crisis and Political Maturation",
        chineseTitle: "诸吕之乱与政治成熟",
        content: "After Emperor Gaozu's death, his widow <strong>Empress Lü</strong> (吕后) became one of the most powerful women in Chinese history, ruling as regent for 15 years (195-180 BCE). She eliminated potential rivals through cruel methods, including turning Gaozu's favored concubine <strong>Lady Qi</strong> into a \"human pig\" (人彘). Empress Lü gradually placed Lü family members in key positions, creating a parallel power structure challenging Liu family legitimacy. Despite her harsh methods, she maintained stability through continued Huang-Lao policies and agricultural support. After Empress Lü's death in 180 BCE, tensions erupted. <strong>Veteran ministers Zhou Bo and Chen Ping</strong> led a coup against the Lü clan, eliminated all Lü clan kings, and placed <strong>Liu Heng</strong> (Emperor Wen) on the throne, beginning a new era of stability and demonstrating the resilience of Han institutions.",
        chineseContent: "高祖死后，其遗孀**吕后**成为中国历史上最有权力的女性之一，摄政15年（前195-180年）。她通过残酷手段消除潜在对手，包括将高祖宠爱的**戚夫人**变成\"人彘\"。吕后逐渐将吕氏家族成员安排到关键位置，建立挑战刘氏家族合法性的平行权力结构。尽管手段严酷，她通过继续黄老政策和农业支持维持了稳定。前180年吕后死后，紧张局势爆发。**老臣周勃、陈平**领导政变对抗吕氏，消灭所有吕氏王侯，立**刘恒**（汉文帝）为帝，开始新的稳定时代，展现了汉朝制度的韧性。"
      },
      {
        title: "The Reign of Wen and Jing: Golden Age of Early Han",
        chineseTitle: "文景之治：西汉初期黄金时代",
        content: "<strong>Emperor Wen</strong> (汉文帝, 180-157 BCE) is remembered as one of China's most virtuous rulers. His administrative reforms included reducing criminal penalties, cutting land taxes from 1/15 to 1/30 of production, and promoting capable officials regardless of background. Known for frugality and accessibility, he refused to build extravagant palaces and personally participated in agricultural work. <strong>Emperor Jing</strong> (汉景帝, 157-141 BCE) continued his father's policies while strengthening central authority. The major crisis was the <strong>Wu-Chu Rebellion (154 BCE)</strong>, where seven kingdoms rebelled against imperial policies to reduce their territories. General <strong>Zhou Yafu's</strong> tactical brilliance crushed the rebellion, permanently weakening feudal kingdoms and strengthening central authority. The combined reigns created unprecedented prosperity, with China's population growing from 13 million to over 59 million people, accumulating the wealth and stability that would enable Emperor Wu's later expansions.",
        chineseContent: "**汉文帝**（前180-157年）被誉为中国最贤德的统治者之一。其行政改革包括减轻刑罚，将田赋从十五税一减至三十税一，不论出身提拔有能力的官员。以节俭和亲民著称，拒绝建造奢华宫殿，亲自参与农业劳动。**汉景帝**（前157-141年）继续其父政策的同时加强中央权威。重大危机是**吴楚七国之乱（前154年）**，七个王国反对削减其领土的帝国政策。**周亚夫**将军的战术才能粉碎了叛乱，永久削弱封建王国，加强中央权威。两帝联合统治创造了前所未有的繁荣，中国人口从1300万增长到5900万人，积累了使武帝后来扩张成为可能的财富和稳定。"
      },
      {
        title: "Emperor Wu's Political Reforms and Centralization",
        chineseTitle: "汉武帝的政治改革与中央集权",
        content: "<strong>Emperor Wu</strong> (汉武帝, r. 141-87 BCE) transformed the Han Dynasty through aggressive reforms. The brilliant <strong>Grace Decree</strong> (推恩令, 127 BCE), proposed by <strong>Zhufu Yan</strong>, required feudal lords to divide territories among all sons rather than just the eldest, gradually weakening kingdoms over generations. Wu created the <strong>Inner Palace Government</strong> with parallel bureaucracy loyal only to the emperor and appointed <strong>Regional Inspectors</strong> (刺史) to oversee local governors. His most significant ideological transformation was adopting <strong>\"Dismiss the Hundred Schools, Honor Only Confucianism\"</strong> (罢黜百家，独尊儒术). <strong>Dong Zhongshu's</strong> proposal convinced Emperor Wu to adopt Confucianism as state ideology, establishing the <strong>Imperial Academy</strong> (太学) for formal education and creating early forms of standardized testing for government positions. This decision influenced Chinese governance for over 2,000 years, creating the foundation for the scholar-official class.",
        chineseContent: "**汉武帝**（前141-87年在位）通过激进改革转变了汉朝。杰出的**推恩令**（前127年）由**主父偃**建议，要求封建领主将领土分给所有儿子而非仅长子，历代逐渐削弱王国。武帝创建仅忠于皇帝的**内朝政府**平行官僚体系，任命**刺史**监督地方总督。其最重要的意识形态转变是采纳**\"罢黜百家，独尊儒术\"**。**董仲舒**的建议说服武帝采纳儒学为国家意识形态，建立**太学**正式教育制度，创建政府职位标准化考试的早期形式。这一决定影响中国治理超过2000年，为士大夫阶层创造了基础。"
      },
      {
        title: "Military Campaigns and Territorial Expansion",
        chineseTitle: "军事征伐与领土扩张",
        content: "Emperor Wu's reign marked China's transformation into an aggressive expansionist power. The <strong>Northern Campaigns Against the Xiongnu</strong> featured Generals <strong>Wei Qing and Huo Qubing</strong> leading successful cavalry campaigns. The <strong>Battle of Hexi Corridor (121 BCE)</strong> secured the crucial trade route to Central Asia and recovered the <strong>Ordos Loop</strong> from nomadic control. <strong>Zhang Qian's Missions to the Western Regions</strong> (138, 119 BCE) were transformative: initially aimed at forming alliances against the Xiongnu, Zhang Qian was captured and spent 10 years in captivity, learning about Central Asian peoples. His second mission (119-115 BCE) established trade relationships, brought detailed geographic knowledge, and introduced new crops (grapes, alfalfa), animals (horses), and technologies. These missions laid the <strong>Foundation of the Silk Road</strong>, establishing diplomatic and commercial networks that lasted centuries. Southern expansions included conquering Minyue, subjugating Nanyue (present-day Guangdong and northern Vietnam), and expanding into Southwest China, integrating diverse ethnic groups under Han control.",
        chineseContent: "武帝统治标志着中国转变为积极的扩张主义强国。**北击匈奴**中，**卫青、霍去病**将军领导成功的骑兵战役。**河西之战（前121年）**确保了通往中亚的关键贸易路线，从游牧控制下收复了**河套**。**张骞通西域**（前138年、前119年）具有变革性：最初旨在与匈奴作战结盟，张骞被俘并被囚10年，了解了中亚民族。其第二次出使（前119-115年）建立贸易关系，带来详细地理知识，引进新作物（葡萄、苜蓿）、动物（马匹）和技术。这些使命奠定了**丝绸之路基础**，建立了延续数世纪的外交和商业网络。南征扩张包括征服闽越，平定南越（今广东和北越），向西南扩张，将多样化民族纳入汉朝控制。"
      },
      {
        title: "Cultural and Technological Achievements",
        chineseTitle: "文化与科技成就",
        content: "The Western Han period witnessed unprecedented cultural flowering. <strong>Sima Qian's Records of the Grand Historian</strong> (《史记》) created the first comprehensive history of China from legendary times to Han, establishing the \"biographical history\" (纪传体) format that combined factual recording with literary artistry and influenced Chinese historical writing for millennia. The <strong>Imperial Academy</strong> (太学) became the first state-sponsored higher education institution, creating standardized curriculum and producing educated bureaucrats. <strong>Fu Poetry</strong> (赋) celebrated imperial power and natural beauty, while scholarly compilation preserved ancient texts. Economic and technological innovation flourished: widespread adoption of <strong>iron tools</strong> revolutionized agriculture, <strong>Silk Road trade</strong> exported Chinese goods to the Roman Empire, and early forms of <strong>paper</strong> were developed for writing. Advanced techniques in <strong>metallurgy</strong>, sophisticated <strong>art and craftsmanship</strong> (bronze mirrors, jade working, silk production), and <strong>astronomical observations</strong> demonstrated the period's intellectual vitality. The population grew dramatically from 13 million to over 59 million people.",
        chineseContent: "西汉时期见证了前所未有的文化繁荣。**司马迁《史记》**创建了从传说时代到汉朝的第一部中国通史，确立了结合事实记录与文学艺术的\"纪传体\"史书体例，影响中国史学著作数千年。**太学**成为第一个国家赞助的高等教育机构，创建标准化课程并培养受教育的官僚。**赋体文学**颂扬帝国权力和自然美景，学术编纂保存了古代文献。经济技术创新蓬勃发展：**铁制工具**的广泛采用革命化了农业，**丝绸之路贸易**向罗马帝国出口中国商品，发展了早期**造纸术**。**冶金学**的先进技术，精美的**艺术工艺**（铜镜、玉器加工、丝绸生产），以及**天文观测**展示了这一时期的智力活力。人口从1300万大幅增长到5900万人。"
      },
      {
        title: "The Witchcraft Crisis and Imperial Decline",
        chineseTitle: "巫蛊之祸与帝国衰落",
        content: "Emperor Wu's later years were marked by paranoia and the devastating <strong>Witchcraft Incident (91 BCE)</strong>. As the aging emperor became increasingly suspicious, court official <strong>Jiang Chong</strong> claimed to discover evidence of witchcraft throughout the palace. The investigation spread, and <strong>Crown Prince Liu Ju</strong> and <strong>Empress Wei Zifu</strong> were implicated in practicing witchcraft against the emperor. Faced with certain death, Liu Ju attempted armed resistance, leading to brief but violent conflict within the imperial palace. The crisis resulted in <strong>over 40,000 deaths</strong> in the purges, including the crown prince and empress who both committed suicide. Jiang Chong was eventually executed when the emperor realized the truth, but the damage was done. The incident left the empire without a designated heir, destroyed trust within the imperial family, eliminated many capable officials, and created lasting trauma. Emperor Wu later acknowledged his mistake and honored the crown prince posthumously, but the crisis marked the beginning of the dynasty's decline.",
        chineseContent: "武帝晚年被偏执和毁灭性的**巫蛊之祸（前91年）**所标记。年迈皇帝变得日益多疑时，宫廷官员**江充**声称在整个宫殿发现巫术证据。调查扩散，**太子刘据**和**卫子夫皇后**被指控对皇帝施巫术。面对必死，刘据试图武装抵抗，导致皇宫内短暂但激烈的冲突。危机导致清洗中**超过4万人死亡**，包括都自杀的太子和皇后。当皇帝意识到真相时江充最终被处决，但损害已造成。事件使帝国没有指定继承人，摧毁了皇室内部信任，消灭了许多有能力的官员，造成持久创伤。武帝后来承认错误并追封太子，但危机标志着王朝衰落的开始。"
      },
      {
        title: "Famous Historical Anecdotes and Cultural Legacy",
        chineseTitle: "著名历史典故与文化遗产",
        content: "The Western Han period produced many famous anecdotes that became part of Chinese cultural consciousness. <strong>Golden House for Ah Jiao</strong> (金屋藏娇): Young Emperor Wu promised his cousin Chen Ah Jiao a golden house if she became his wife, but later abandoned her for failing to produce an heir, becoming a metaphor for lavish promises and betrayal. <strong>Merit of Sweating Horses</strong> (汗马功劳): Liu Bang's praise for Xiao He's administrative contributions while others fought battles, recognizing that non-combat contributions are equally valuable. <strong>Yelang's Arrogance</strong> (夜郎自大): A southwestern king's ignorant question \"Which is greater, Han or Yelang?\" became a warning against ignorant pride. <strong>Cut Sleeve Affection</strong> (断袖之癖): Emperor Ai's deep affection for his male favorite Dong Xian, cutting his sleeve rather than wake him, became a euphemism for male homosexuality in Chinese literature. These stories illustrate the period's rich cultural legacy and moral lessons that influenced Chinese thinking for generations.",
        chineseContent: "西汉时期产生了许多成为中华文化意识一部分的著名典故。**金屋藏娇**：幼年武帝承诺表姐陈阿娇金屋，但后来因她未能生育继承人而抛弃她，成为奢华承诺和背叛的隐喻。**汗马功劳**：刘邦对萧何行政贡献的赞扬，当其他人作战时，承认非战斗贡献同等宝贵。**夜郎自大**：西南王无知地问\"汉与夜郎孰大？\"成为对无知骄傲的警告。**断袖之癖**：哀帝对男宠董贤的深情，割断袖子而不愿吵醒他，成为中国文学中男同性恋的委婉说法。这些故事展示了这一时期丰富的文化遗产和影响中国思想数代的道德教训。"
      },
      {
        title: "The End of Western Han and Wang Mang's Usurpation",
        chineseTitle: "西汉终结与王莽篡汉",
        content: "The Western Han's decline began with increasing power of imperial consort families. Later Han rulers were often young, sickly, or incompetent, while maternal relatives gained excessive influence. The <strong>Wang Family's Ascendancy</strong> began with <strong>Wang Zhengjun</strong> becoming empress and mother of Emperor Cheng. Through strategic marriages and administrative control, Wang family members occupied key government positions. <strong>Wang Mang's Rise</strong> (45 BCE - 8 CE) combined merit, family connections, and careful cultivation of a reputation for virtue and Confucian learning. As regent for child emperors, he gradually accumulated all imperial powers through political maneuvering and elimination of rivals. The <strong>End of Western Han (8 CE)</strong> came when Wang Mang forced the last Han emperor to abdicate, establishing the <strong>Xin Dynasty</strong> (\"New Dynasty\") with himself as emperor. He claimed the Mandate of Heaven had transferred to him, ending over 200 years of Western Han rule and demonstrating how systemic weaknesses in imperial succession could lead to dynastic collapse.",
        chineseContent: "西汉的衰落始于皇室外戚家族权力的增长。后期汉朝统治者常常年幼、多病或无能，而母系亲属获得过度影响力。**王氏家族的兴起**始于**王政君**成为皇后和成帝之母。通过战略联姻和行政控制，王氏家族成员占据关键政府职位。**王莽崛起**（前45年-8年）结合才能、家族关系，以及精心培养德行和儒学修养的声誉。作为幼帝摄政，他通过政治手段和消除对手逐渐积累所有帝国权力。**西汉终结（8年）**发生在王莽迫使最后的汉皇帝退位，以自己为皇帝建立**新朝**时。他声称天命已转移给他，结束了200多年的西汉统治，展示了帝国继承中的系统性弱点如何导致王朝崩溃。"
      }
    ],
    significance: "The Western Han Dynasty established fundamental patterns that shaped Chinese civilization for over two millennia. Its political institutions included perfecting unified imperial rule, creating merit-based civil service, developing effective provincial administration, and establishing hereditary monarchy with institutional safeguards. Cultural contributions created lasting Han ethnic identity, established Confucianism as state ideology, set standards for historical writing, and founded institutions for training government officials. Economic foundations included establishing transcontinental Silk Road trade networks, improving farming techniques, creating stable currency for empire-wide commerce, and building infrastructure that lasted centuries. The dynasty's technological innovation encouraged systematic observation and experimentation, demonstrated advanced construction techniques, integrated diverse regional traditions into unified culture, and established diplomatic protocols with neighboring states. Every subsequent Chinese dynasty adopted Han governmental structures, with 'Han people' becoming the standard term for ethnic Chinese and examination systems evolving from Han practices. The Western Han thus created not just a political state, but a cultural and institutional framework that defined Chinese civilization.",
    chineseSignificance: "西汉王朝建立了塑造中华文明两千多年的基本模式。其政治制度包括完善统一帝国统治，创建基于才能的文官制度，发展有效的省级行政，建立有制度保障的世袭君主制。文化贡献创造了持久的汉族认同，确立儒学为国家意识形态，确立史学著作标准，建立培训政府官员的机构。经济基础包括建立跨大陆丝绸之路贸易网络，改进农业技术，为全国商业创造稳定货币，建造延续数世纪的基础设施。王朝的技术创新鼓励系统观察和实验，展示先进建筑技术，将多样化地区传统整合为统一文化，与邻国建立外交规程。每个后续中国王朝都采用了汉朝的政府结构，'汉人'成为中华民族的标准称谓，考试制度从汉朝实践发展而来。因此，西汉不仅创造了一个政治国家，而且创造了定义中华文明的文化和制度框架。"
  },
  eastern_han: {
    title: "The Eastern Han Dynasty: Revival and Intellectual Flourishing",
    chineseTitle: "东汉：复兴与学术繁荣",
    period: "25-220 CE",
    introduction: "The Eastern Han Dynasty (25-220 CE) represents the restoration and continuation of Han rule after the brief interruption of Wang Mang's Xin Dynasty (8-23 CE). Lasting 195 years and spanning 12 emperors, the Eastern Han period witnessed remarkable cultural achievements, technological innovations, and territorial expansion, while also experiencing the chronic problem of power struggles between consort families and eunuchs that ultimately led to its downfall.",
    chineseIntroduction: "东汉（25年—220年）代表了王莽新朝（8年—23年）短暂中断后汉朝统治的恢复和延续。历时195年，经历12位皇帝，东汉时期见证了卓越的文化成就、技术创新和领土扩张，同时也经历了外戚与宦官之间的权力斗争这一慢性问题，最终导致王朝灭亡。",
    events: [
      {
        title: "Wang Mang's Xin Dynasty and Its Collapse (8-23 CE)",
        chineseTitle: "王莽新朝及其崩溃（8—23年）",
        content: "Wang Mang's brief Xin Dynasty represented one of the most ambitious attempts at social engineering in Chinese history. His radical reforms included <strong>land redistribution</strong> (nationalizing all land and attempting equal redistribution), <strong>slavery abolition</strong> (banning the buying and selling of slaves), <strong>currency reform</strong> (introducing complex new monetary systems), and <strong>government monopolies</strong> (extending state control over salt, iron, and liquor). These reforms disrupted established economic arrangements, caused agricultural chaos, and created widespread resistance. The <strong>Green Woodsmen and Red Eyebrows rebellions</strong> ultimately destroyed his dynasty. The Green Woodsmen rebellion, led by Wang Kuang, Wang Feng, and later joined by Liu Yan and Liu Xiu (future Emperor Guangwu), used guerrilla tactics and established base areas. The Red Eyebrows rebellion, with rebels painting their eyebrows red for identification, captured Chang'an and killed Wang Mang in 23 CE, ending the Xin Dynasty after only 15 years.",
        chineseContent: "王莽短暂的新朝代表了中国历史上最雄心勃勃的社会工程尝试之一。他的激进改革包括<strong>土地再分配</strong>（将所有土地国有化并试图平等再分配）、<strong>废除奴隶制</strong>（禁止买卖奴隶）、<strong>货币改革</strong>（引入复杂的新货币体系）和<strong>政府专卖</strong>（扩大国家对盐、铁、酒的控制）。这些改革破坏了既定的经济安排，造成农业混乱，引发广泛抵制。<strong>绿林赤眉起义</strong>最终摧毁了他的王朝。绿林起义由王匡、王凤领导，后来刘縯、刘秀（未来的光武帝）加入，使用游击战术并建立根据地。赤眉起义者将眉毛涂红以便识别，攻占长安并在23年杀死王莽，仅15年后就结束了新朝。"
      },
      {
        title: "Emperor Guangwu and the Guangwu Restoration (25-57 CE)",
        chineseTitle: "光武帝与光武中兴（25—57年）",
        content: "<strong>Liu Xiu</strong>, posthumously known as Emperor Guangwu, emerged from the chaos to restore Han rule. A descendant of Emperor Jing of Han, he demonstrated exceptional strategic abilities in key battles like the <strong>Battle of Kunyang (23 CE)</strong>, which established his military reputation. His 32-year reign featured remarkable achievements: <strong>administrative reform</strong> (streamlined government and reduced bureaucratic complexity), <strong>economic recovery</strong> (redistributed abandoned land, lowered taxes, rebuilt infrastructure), <strong>cultural revival</strong> (attracted scholars, restored schools, collected lost texts), and <strong>foreign relations</strong> (restored peaceful relations and rebuilt trade networks). He established the capital at <strong>Luoyang</strong> rather than Chang'an, created professional armies loyal to the imperial court, and appointed capable governors for provincial administration. The Guangwu Restoration established the Eastern Han as a stable and prosperous dynasty.",
        chineseContent: "<strong>刘秀</strong>，谥号光武帝，从混乱中崛起恢复汉朝统治。作为汉景帝后裔，他在<strong>昆阳之战（23年）</strong>等关键战役中展现卓越战略能力，确立军事声誉。他32年的统治成就斐然：<strong>行政改革</strong>（精简政府并减少官僚复杂性）、<strong>经济复苏</strong>（重新分配废弃土地、降低税收、重建基础设施）、<strong>文化复兴</strong>（吸引学者、恢复学校、收集失散文献）和<strong>对外关系</strong>（恢复和平关系并重建贸易网络）。他在<strong>洛阳</strong>而非长安建都，创建忠于朝廷的职业军队，任命有能力的总督管理省级行政。光武中兴确立了东汉为稳定繁荣的王朝。"
      },
      {
        title: "The Ming-Zhang Prosperity (57-88 CE)",
        chineseTitle: "明章之治（57—88年）",
        content: "<strong>Emperor Ming (57-75 CE)</strong> continued his father's policies while introducing Buddhism to China. The <strong>White Horse Temple</strong> was established in Luoyang (68 CE) as China's first Buddhist temple, welcoming Buddhist missionaries from Central Asia and India and beginning systematic translation of Buddhist scriptures. Ming expanded the Imperial Academy, supported scholarly writing, and maintained excellent administration with low taxes. <strong>Emperor Zhang (75-88 CE)</strong> built upon these achievements with governmental innovation including an improved memorialization system, performance evaluation of officials, judicial reform with appellate procedures, and effective regional administration. His social policies included further tax relief, systematic disaster relief, and balanced trade regulation. Cultural advancement featured academy reform with practical subjects, literary patronage, technical documentation, and scholarly debates that facilitated intellectual exchange.",
        chineseContent: "<strong>汉明帝（57—75年）</strong>继续其父政策的同时将佛教引入中国。<strong>白马寺</strong>在洛阳建立（68年）作为中国第一座佛教寺庙，欢迎来自中亚和印度的佛教传教士，开始系统性地翻译佛教经典。明帝扩展太学，支持学术写作，保持卓越行政并维持低税收。<strong>汉章帝（75—88年）</strong>在这些成就基础上进行政府创新，包括改善奏疏制度、官员绩效评估、司法改革和有效的地区行政。他的社会政策包括进一步减税、系统性救灾和平衡的贸易监管。文化进步包括学院改革以包括实用科目、文学赞助、技术文献化，以及促进知识交流的学术辩论。"
      },
      {
        title: "Ban Chao's Management of the Western Regions (73-102 CE)",
        chineseTitle: "班超经营西域（73—102年）",
        content: "<strong>Ban Chao</strong> led one of the most successful diplomatic and military campaigns in Chinese history to restore control over the Silk Road. Beginning with only 36 men, he relied primarily on diplomacy over force. His key achievements included securing the <strong>Shanshan Kingdom</strong> (convinced this crucial oasis state to abandon pro-Xiongnu policies), forming the <strong>Khotan Alliance</strong> (secured loyalty of this wealthy jade-producing kingdom), the <strong>Kucha Campaign</strong> (defeated this powerful state that resisted Han influence), and establishing a <strong>regional network</strong> of Chinese influence over 50 kingdoms and city-states. His strategies involved coalition building with local kingdoms, psychological warfare using reputation and diplomatic skill, strategic marriages to cement alliances, and economic incentives through trade privileges. The long-term impact included trade revival (reopened Silk Road routes), cultural exchange (facilitated movement of ideas and religions), strategic security (protected China's western frontier), and diplomatic precedent (established models for managing distant territories).",
        chineseContent: "<strong>班超</strong>领导了中国历史上最成功的外交军事行动之一，恢复对丝绸之路的控制。仅以36人开始，他主要依靠外交而非武力。他的主要成就包括确保<strong>鄯善王国</strong>（说服这个关键绿洲国家放弃亲匈奴政策）、建立<strong>于阗联盟</strong>（确保这个富有产玉王国的忠诚）、<strong>龟兹战役</strong>（击败这个抵制汉朝影响的强大国家），以及建立对50个王国和城邦的<strong>地区影响网络</strong>。他的策略包括与当地王国建立联盟、利用声誉和外交技巧的心理战、巩固联盟的战略联姻，以及通过贸易特权的经济激励。长期影响包括贸易复兴（重新开放丝绸之路路线）、文化交流（促进思想和宗教的流动）、战略安全（保护中国西部边境）和外交先例（为管理遥远领土建立模式）。"
      },
      {
        title: "The Struggle Between Consort Families and Eunuchs",
        chineseTitle: "外戚与宦官的斗争",
        content: "The Eastern Han period was increasingly dominated by power struggles between imperial consort families and palace eunuchs due to structural problems: many young emperors requiring regencies, excessive influence of maternal relatives, privileged eunuch access to emperors, and lack of effective checks on non-official power. The <strong>Dou Family Dominance (88-92 CE)</strong> saw Empress Dowager Dou and Dou Xian accumulate vast personal power through nepotism and military control. <strong>Emperor He's Counter-Coup (92 CE)</strong> involved the young emperor allying with palace eunuchs through secret planning to eliminate the Dou family, transferring power to eunuchs as reward. The conflict reached its climax in the <strong>Partisan Prohibitions (166-184 CE)</strong>, where ideological conflict between Confucian scholars (\"pure stream\") and eunuchs (\"turbid stream\") led to mass arrests of over 200 scholars, family persecution, career destruction, and intellectual suppression. The consequences included brain drain as talented individuals avoided government service, administrative decline with incompetent eunuch appointees, and social instability as loss of moral authority undermined imperial legitimacy.",
        chineseContent: "东汉时期日益被皇室外戚家族和宫廷宦官之间的权力斗争所主导，由于结构性问题：许多年幼皇帝需要摄政、母系亲属的过度影响、宦官接近皇帝的特权，以及缺乏对非官方权力的有效制衡。<strong>窦氏专权（88—92年）</strong>看到窦太后和窦宪通过任人唯亲和军事控制积累巨大个人权力。<strong>和帝政变（92年）</strong>涉及年幼皇帝与宫廷宦官联盟，通过秘密策划消除窦氏家族，将权力转移给宦官作为奖励。冲突在<strong>党锢之祸（166—184年）</strong>中达到高潮，儒家学者（\\\"清流\\\"）与宦官（\\\"浊流\\\"）之间的意识形态冲突导致200多名学者被大规模逮捕、家族迫害、生涯毁灭和知识压制。后果包括有才能的人避免政府服务的人才流失、无能宦官任命者的行政衰落，以及道德权威丧失破坏帝国合法性的社会不稳定。"
      },
      {
        title: "Technological and Cultural Achievements",
        chineseTitle: "科技与文化成就",
        content: "The Eastern Han period witnessed remarkable scientific and technological achievements. <strong>Papermaking Revolution</strong>: <strong>Cai Lun's innovation (105 CE)</strong> improved the papermaking process using tree bark, hemp, and rags, developing efficient methods for large-scale production that dramatically reduced the cost of writing materials and eventually revolutionized global communication. <strong>Zhang Heng's Scientific Achievements</strong> included the world's first seismograph (132 CE), sophisticated armillary sphere for astronomical observation, mathematical calculations of pi to unprecedented accuracy, and literary works combining scientific knowledge with poetic expression. <strong>Medical Advances</strong> featured <strong>Zhang Zhongjing's</strong> \"Treatise on Cold Damage Disorders\" establishing clinical medicine principles, <strong>Hua Tuo's</strong> pioneering surgery under anesthesia, systematic acupuncture documentation, and comprehensive herbal medicine cataloging. <strong>Literary and Historical Development</strong> included <strong>Ban Gu's \"Book of Han\"</strong> as the first dynastic history, scholarly compilation of classical commentary and encyclopedia projects, and educational development with the Imperial Academy reaching 30,000 students and standardized curriculum across the empire.",
        chineseContent: "东汉时期见证了卓越的科学技术成就。<strong>造纸术革命</strong>：<strong>蔡伦的改进（105年）</strong>使用树皮、麻和破布改进造纸工艺，发展大规模生产的高效方法，大幅降低书写材料成本，最终革命化全球交流。<strong>张衡的科学成就</strong>包括世界第一台地动仪（132年）、复杂的天文观测浑天仪、将圆周率计算到前所未有精度的数学计算，以及将科学知识与诗歌表达结合的文学作品。<strong>医学进步</strong>包括<strong>张仲景</strong>的《伤寒杂病论》建立临床医学原则、<strong>华佗</strong>在麻醉下进行的先驱外科手术、系统性针灸文献化，以及全面的草药医学编目。<strong>文学史学发展</strong>包括<strong>班固《汉书》</strong>作为第一部断代史、经典注疏和百科全书项目的学术编纂，以及太学招生达到3万学生和全国统一课程的教育发展。"
      },
      {
        title: "The Yellow Turban Rebellion and Dynasty's Collapse (184 CE)",
        chineseTitle: "黄巾起义与王朝崩溃（184年）",
        content: "The Yellow Turban Rebellion marked the beginning of the end for the Eastern Han Dynasty. Background conditions included natural disasters (floods, droughts, locust swarms), economic hardship from heavy taxation and corrupt administration, vast social inequality, government corruption from eunuch dominance, and religious ferment from popular dissatisfaction. <strong>Zhang Jue's religious movement</strong> called <strong>Taiping Dao</strong> (Way of Great Peace) combined Daoism, folk beliefs, and messianic expectations, using healing practices and promising equality in a new world order. The movement attracted hundreds of thousands of followers organized in cells throughout northern and central China. The <strong>rebellion erupted</strong> with coordinated uprisings across multiple provinces under the \"Yellow Sky\" prophecy: \"The Blue Sky is dead, the Yellow Sky will rise.\" Initial successes captured numerous cities, but the <strong>imperial response</strong> mobilized massive resources, recalled frontier armies, empowered local strongmen, and brutally suppressed rebels. The consequences included decentralized military power for regional commanders, economic devastation from warfare, administrative collapse as central government lost territorial control, and permanent social transformation disrupting traditional order.",
        chineseContent: "黄巾起义标志着东汉王朝末日的开始。背景条件包括自然灾害（洪水、干旱、蝗灾）、沉重税收和腐败行政的经济困难、巨大的社会不平等、宦官专权的政府腐败，以及民众对传统信仰不满的宗教骚动。<strong>张角的宗教运动</strong>称为<strong>太平道</strong>，结合道教、民间信仰和救世期望，使用治疗实践并承诺在新世界秩序中的平等。运动吸引数十万信徒，在华北和中原各地组织教团。在\\\"黄天\\\"预言下<strong>起义爆发</strong>：\\\"苍天已死，黄天当立。\\\"多个省份协调起义。初期成功攻占众多城市，但<strong>帝国回应</strong>动员大量资源、召回边境军队、授权地方豪强并残酷镇压起义军。后果包括地区指挥官的军事权力分散、战争的经济破坏、中央政府失去领土控制的行政崩溃，以及破坏传统秩序的永久性社会变革。"
      },
      {
        title: "Cao Cao's Rise and the End of Eastern Han (196-220 CE)",
        chineseTitle: "曹操崛起与东汉终结（196—220年）",
        content: "<strong>Cao Cao</strong> emerged as the most successful warlord during the post-Yellow Turban fragmentation. Son of a eunuch's adopted family, he demonstrated exceptional strategic abilities and opportunistic politics. His key achievement was <strong>securing Emperor Xian (196 CE)</strong> by inviting him to his capital at Xu (modern Xuchang), using the strategy of \"honoring the emperor to command the nobles\" to legitimize his actions and gain moral authority. Cao Cao's consolidation of northern China included defeating rival Yuan Shao at the <strong>Battle of Guandu (200 CE)</strong>, implementing efficient administrative and military reforms, and restoring economic recovery in war-torn regions. However, his southern expansion was limited by the major defeat at the <strong>Battle of Red Cliffs (208 CE)</strong> by the Sun-Liu alliance. After Cao Cao's natural death in 220 CE, his son <strong>Cao Pi</strong> forced <strong>Emperor Xian to abdicate</strong> through formal pressure and ritual justification, proclaiming himself Emperor Wen of Wei. The Eastern Han Dynasty officially ended after 195 years, with China entering the Three Kingdoms period of tripartite division.",
        chineseContent: "<strong>曹操</strong>在黄巾起义后的分裂中成为最成功的军阀。作为宦官养子家庭出身，他展现卓越的战略能力和机会主义政治。他的关键成就是<strong>控制献帝（196年）</strong>，邀请他到其都城许都（今许昌），使用\\\"挟天子以令诸侯\\\"的策略使其行动合法化并获得道德权威。曹操巩固北方中国包括在<strong>官渡之战（200年）</strong>击败对手袁绍、实施高效的行政军事改革、在战乱地区恢复经济复苏。然而，他的南向扩张受到在<strong>赤壁之战（208年）</strong>被孙刘联盟重大击败的限制。曹操220年自然死亡后，其子<strong>曹丕</strong>通过正式压力和礼仪理由<strong>迫使献帝退位</strong>，自立为魏文帝。东汉王朝在195年后正式结束，中国进入三国时期的三分天下。"
      }
    ],
    significance: "The Eastern Han Dynasty, despite its eventual collapse, made fundamental contributions that shaped Chinese civilization. Its technological and scientific legacy included papermaking revolution that revolutionized global information storage, seismological innovation demonstrating Chinese scientific sophistication, systematic traditional Chinese medicine development, and engineering excellence influencing later dynasties. Cultural and educational achievements established standards for dynastic histories lasting centuries, successfully integrated Buddhism into Chinese culture, systematized Confucian scholarship and commentary traditions, and created educational systems training generations of scholar-officials. Administrative and political innovations refined governmental systems adopted by successor dynasties, developed provincial governance models used throughout imperial history, established merit-based examination systems, and created legal principles influencing Chinese jurisprudence. The dynasty's collapse provided important lessons for future governance about institutional vulnerabilities, political balance requirements, social and economic factors, and dynastic cycle patterns. The Eastern Han's legacy encompasses both remarkable achievement and cautionary lessons, making it essential for understanding Chinese imperial governance dynamics and civilization foundations.",
    chineseSignificance: "东汉王朝尽管最终崩溃，但做出了塑造中华文明的根本贡献。其技术科学遗产包括革命化全球信息存储的造纸术革命、展示中国科学复杂性的地震学创新、中医的系统发展，以及影响后世王朝的工程卓越。文化教育成就为延续数世纪的断代史确立标准、成功将佛教融入中国文化、系统化儒家学术和注疏传统，并创造培训几代士大夫的教育制度。行政政治创新完善了被后续王朝采用的政府制度、发展了在整个帝制历史中使用的省级治理模式、建立了基于才能的考试制度，并创造了影响中国法理学的法律原则。王朝的崩溃为未来治理提供了关于制度弱点、政治平衡要求、社会经济因素和王朝循环模式的重要教训。东汉的遗产既包含卓越成就又包含警示教训，使其成为理解中国帝制治理动态和文明基础的重要研究。"
  },
  wei_jin_southern_northern: {
    title: "The Wei, Jin, and Northern and Southern Dynasties: Era of Division and Cultural Flowering",
    chineseTitle: "魏晋南北朝：分裂与文化繁荣时代",
    period: "220-589 CE",
    introduction: "The Wei, Jin, and Northern and Southern Dynasties period (220-589 CE) represents China's greatest era of political fragmentation between the Han and Sui dynasties. Lasting approximately 370 years, this period encompassed the Three Kingdoms (Wei, Shu, Wu), Western Jin, Eastern Jin and Sixteen Kingdoms, and Northern and Southern Dynasties. Despite political division, this era witnessed accelerated ethnic integration, diverse cultural development, and laid the foundation for the Sui-Tang reunification.",
    chineseIntroduction: "魏晋南北朝（220年—589年）是中国历史上继汉朝之后、隋朝之前的大分裂时期，历时约370年，包括三国（魏蜀吴）、西晋、东晋十六国和南北朝多个阶段。这一时期政权更迭频繁，民族融合加速，文化多元发展，为隋唐大一统奠定了基础。",
    events: [
      {
        title: "The Three Kingdoms Period (220-280 CE)",
        chineseTitle: "三国时期（220年—280年）",
        content: "The Three Kingdoms period began when <strong>Cao Pi</strong> forced Emperor Xian to abdicate in 220 CE, establishing <strong>Cao Wei</strong> with its capital at Luoyang. <strong>Cao Wei (220-265 CE)</strong> implemented the <strong>Nine-Rank System</strong> (九品中正制) for official selection, which initially merit-based, gradually became a tool for aristocratic monopoly. The <strong>Sima family's rise</strong> culminated in Sima Yi's Coup at Gaoping Tombs (249 CE). <strong>Shu Han (221-263 CE)</strong> was established by <strong>Liu Bei</strong> in Chengdu, claiming Han legitimacy. <strong>Zhuge Liang's Northern Expeditions</strong> (227-234 CE) from Qishan demonstrated tactical brilliance but faced resource disadvantages, ending with his death at Wuzhang Plains. Shu fell first when Wei general <strong>Deng Ai</strong> made a surprise attack through Yinping in 263 CE. <strong>Eastern Wu (229-280 CE)</strong> was proclaimed by <strong>Sun Quan</strong> in Jianye (Nanjing), becoming the longest-lasting kingdom. Wu developed the <strong>Jiangnan region</strong>, promoted maritime technology, and established Southeast Asian trade networks. The period ended when Western Jin's <strong>Du Yu</strong> and <strong>Wang Jun</strong> conquered Wu in 280 CE, achieving national reunification.",
        chineseContent: "三国时期始于220年<strong>曹丕</strong>逼汉献帝禅让，建立<strong>曹魏</strong>，都洛阳。<strong>曹魏（220—265年）</strong>实施官员选拔的<strong>九品中正制</strong>，最初基于才能，但逐渐成为贵族垄断工具。<strong>司马氏崛起</strong>在司马懿高平陵之变（249年）达到顶峰。<strong>蜀汉（221—263年）</strong>由<strong>刘备</strong>在成都建立，声称汉朝正统。<strong>诸葛亮北伐</strong>（227—234年）从祁山展示战术卓越但面临资源劣势，以其在五丈原病逝而结束。蜀汉在魏将<strong>邓艾</strong>263年从阴平奇袭时首先灭亡。<strong>东吴（229—280年）</strong>由<strong>孙权</strong>在建业（南京）称帝，成为延续最久的王国。吴国开发<strong>江南地区</strong>，促进海事技术，建立东南亚贸易网络。这一时期在西晋的<strong>杜预</strong>和<strong>王濬</strong>280年征服吴国、实现全国统一时结束。"
      },
      {
        title: "Western Jin and the Fall to Barbarian Invasions (265-316 CE)",
        chineseTitle: "西晋与胡族入侵（265年—316年）",
        content: "<strong>Sima Yan</strong> usurped the Wei throne in 265 CE, establishing the Jin Dynasty with its capital at Luoyang. After conquering Wu in 280 CE, China enjoyed the <strong>Taikang Prosperity</strong> (280-290 CE), featuring economic recovery, population growth, and cultural renaissance. However, Sima Yan's decision to grant fiefs to family members created future problems. The <strong>War of the Eight Princes</strong> (291-306 CE) saw internal power struggles among Sima family princes that weakened central government and depleted state resources, creating opportunities for northern nomadic invasions. The <strong>Yongjia Disaster</strong> (311 CE) occurred when the <strong>Xiongnu Han state</strong> attacked and captured Luoyang, taking <strong>Emperor Huai</strong> prisoner and devastating Jin prestige. Northern China fell into chaos with multiple barbarian invasions, collapsing the traditional Chinese political order. <strong>Jin's Southern Migration</strong> (316 CE) began when Xiongnu forces captured Chang'an, ending Western Jin. <strong>Sima Rui</strong> reestablished the Jin Dynasty in Jiankang (Nanjing), marking the beginning of Eastern Jin and massive population migration from north to south China.",
        chineseContent: "<strong>司马炎</strong>265年篡魏建立晋朝，定都洛阳。280年灭吴后，中国享受<strong>太康之治</strong>（280—290年），包括经济复苏、人口增长和文化复兴。然而，司马炎分封家族成员的决定创造了未来问题。<strong>八王之乱</strong>（291—306年）中司马家族诸王的内部权力斗争削弱了中央政府并耗尽国家资源，为北方游牧入侵创造机会。<strong>永嘉之乱</strong>（311年）发生在<strong>匈奴汉国</strong>攻击并攻占洛阳、俘获<strong>晋怀帝</strong>并重创晋朝威望时。北方中国在多次胡族入侵中陷入混乱，传统中国政治秩序崩溃。<strong>晋室南迁</strong>（316年）始于匈奴军队攻占长安、西晋灭亡。<strong>司马睿</strong>在建康（南京）重建晋朝，标志东晋开始和从北方到南方中国的大规模人口迁移。"
      },
      {
        title: "Eastern Jin and the Sixteen Kingdoms (317-420 CE)",
        chineseTitle: "东晋与十六国（317年—420年）",
        content: "The <strong>Eastern Jin (317-420 CE)</strong> maintained Chinese imperial tradition in the south while the north fell to barbarian kingdoms. The dynasty operated under <strong>\\\"Wang and Ma Share the Realm\\\"</strong> politics, heavily depending on aristocratic families, especially the <strong>Langya Wang family</strong>, creating a \\\"gate-valve politics\\\" system that constrained imperial power. The <strong>Battle of Fei River (383 CE)</strong> saw Eastern Jin forces under <strong>Xie An</strong> and <strong>Xie Xuan</strong> achieve a stunning victory over <strong>Former Qin's</strong> Fu Jian's 800,000-strong invasion force with only 80,000 men, establishing the North-South confrontation pattern for centuries. The <strong>Sixteen Kingdoms (304-439 CE)</strong> in northern China involved multiple ethnic groups: <strong>Xiongnu</strong> (Former and Later Zhao), <strong>Xianbei</strong> (various Yan states), <strong>Di</strong> (Former and Later Qin), and <strong>Qiang</strong> (Later Qin), among others. <strong>Fu Jian's unification of the north</strong> (376 CE) briefly united northern China under Former Qin through policies of ethnic integration and cultural tolerance, but collapsed after Fei River. The period ended when <strong>Northern Wei's Tuoba Tao</strong> conquered Northern Liang in 439 CE, and general <strong>Liu Yu</strong> usurped Eastern Jin in 420 CE, beginning the Southern Dynasties period.",
        chineseContent: "<strong>东晋（317—420年）</strong>在北方落入胡族王国时在南方维持中华帝制传统。王朝在<strong>\\\"王与马，共天下\\\"</strong>政治下运作，严重依赖贵族家庭，特别是<strong>琅琊王氏</strong>，创造了制约皇权的\\\"门阀政治\\\"制度。<strong>淝水之战（383年）</strong>中东晋军在<strong>谢安</strong>、<strong>谢玄</strong>指挥下仅以8万人对<strong>前秦</strong>苻坚80万大军取得惊人胜利，确立数世纪的南北对峙格局。北方中国的<strong>十六国（304—439年）</strong>涉及多个民族：<strong>匈奴</strong>（前后赵）、<strong>鲜卑</strong>（各燕国）、<strong>氐</strong>（前后秦）、<strong>羌</strong>（后秦）等。<strong>苻坚统一北方</strong>（376年）通过民族融合和文化宽容政策短暂在前秦下统一北方中国，但在淝水之战后崩溃。这一时期在<strong>北魏拓跋焘</strong>439年征服北凉和将军<strong>刘裕</strong>420年篡东晋、开始南朝时期时结束。"
      },
      {
        title: "The Northern and Southern Dynasties (420-589 CE)",
        chineseTitle: "南北朝（420年—589年）",
        content: "The <strong>Southern Dynasties</strong> comprised four successive dynasties in Jiankang (Nanjing): <strong>Liu Song (420-479 CE)</strong> represented the most powerful period, <strong>Xiao Qi (479-502 CE)</strong> was the shortest-lived with constant succession disputes, <strong>Xiao Liang (502-557 CE)</strong> was known for Emperor Wu's Buddhist devotion but devastated by <strong>Hou Jing's Rebellion</strong> (548 CE), and <strong>Chen Dynasty (557-589 CE)</strong> controlled the smallest territory before being destroyed by Sui in 589 CE. All shared characteristics of <strong>aristocratic dominance</strong>, <strong>Buddhist influence</strong>, <strong>cultural refinement</strong>, and <strong>military weakness</strong>. The <strong>Northern Dynasties</strong> included: <strong>Northern Wei (386-534 CE)</strong> established by Tuoba Xianbei, featuring <strong>Emperor Xiaowen's Reforms</strong> (494 CE) that moved the capital to Luoyang and promoted sinicization; <strong>Eastern Wei and Western Wei</strong> (534 CE division) controlled by Gao Huan and Yuwen Tai respectively; <strong>Northern Qi (550-577 CE)</strong> with erratic emperors but economic prosperity; and <strong>Northern Zhou (557-581 CE)</strong> that implemented the revolutionary <strong>Fubing System</strong> and <strong>Equal Field System</strong>, innovations that became foundations for Sui and Tang governance. Yang Jian (later Emperor Wen of Sui) seized Northern Zhou power in 581 CE, setting the stage for reunification.",
        chineseContent: "<strong>南朝</strong>包括建康（南京）的四个相继王朝：<strong>刘宋（420—479年）</strong>代表最强盛时期，<strong>萧齐（479—502年）</strong>是延续最短、不断有继承争端的，<strong>萧梁（502—557年）</strong>以武帝信佛著称但被<strong>侯景之乱</strong>（548年）重创，<strong>南陈（557—589年）</strong>控制最小领土，589年被隋灭亡。所有朝代都有<strong>贵族统治</strong>、<strong>佛教影响</strong>、<strong>文化精致</strong>和<strong>军事弱势</strong>的共同特征。<strong>北朝</strong>包括：拓跋鲜卑建立的<strong>北魏（386—534年）</strong>，以<strong>孝文帝改革</strong>（494年）迁都洛阳并推行汉化为特征；由高欢和宇文泰分别控制的<strong>东魏、西魏</strong>（534年分裂）；皇帝反复无常但经济繁荣的<strong>北齐（550—577年）</strong>；实施革命性<strong>府兵制</strong>和<strong>均田制</strong>、成为隋唐治理基础的创新的<strong>北周（557—581年）</strong>。杨坚（后来的隋文帝）581年夺取北周政权，为统一奠定基础。"
      },
      {
        title: "Cultural and Technological Achievements",
        chineseTitle: "文化与科技成就",
        content: "This period witnessed unprecedented cultural and technological achievements despite political fragmentation. <strong>Philosophy and Religion</strong> saw the rise of <strong>Dark Learning</strong> (玄学) by He Yan and Wang Bi, exploring metaphysical questions and the \\\"Debate on Being and Non-Being.\\\" <strong>Buddhism flourished</strong> with Fa Xian's journey to India (399-414 CE), the carving of <strong>Yungang Grottoes</strong> and <strong>Longmen Grottoes</strong>, and accelerated translation of Buddhist texts. <strong>Daoism developed</strong> through Ge Hong's \\\"Baopuzi\\\" and Kou Qianzhi's reform of Celestial Masters Daoism. <strong>Literature and Arts</strong> produced remarkable works: <strong>Jian'an Literature</strong> by Cao Cao, Cao Pi, and Cao Zhi established new poetic styles; <strong>Tao Yuanming</strong> pioneered reclusive poetry including \\\"The Peach Blossom Spring\\\"; <strong>Wang Xizhi's</strong> \\\"Preface to the Orchid Pavilion\\\" became the \\\"World's Greatest Running Script\\\"; and <strong>Gu Kaizhi</strong> created masterpiece paintings like \\\"Admonitions of the Court Instructress.\\\" <strong>Science and Technology</strong> achieved breakthroughs: <strong>Zu Chongzhi</strong> calculated π accurate to seven decimal places (remaining world's most accurate for 1,000 years), and <strong>Jia Sixie</strong> compiled \\\"Essential Techniques for the Peasantry,\\\" China's earliest comprehensive agricultural manual. Economic development included the southward migration of China's economic center and technological innovations in agriculture and craftsmanship.",
        chineseContent: "这一时期尽管政治分裂，但见证了前所未有的文化技术成就。<strong>思想宗教</strong>方面，何晏、王弼兴起<strong>玄学</strong>，探讨形而上学问题和\\\"有无之辩\\\"。<strong>佛教兴盛</strong>，有法显西行印度（399—414年）、<strong>云冈石窟</strong>和<strong>龙门石窟</strong>的开凿，以及佛教文本翻译的加速。<strong>道教发展</strong>通过葛洪《抱朴子》和寇谦之改革天师道。<strong>文学艺术</strong>产生卓越作品：曹操、曹丕、曹植的<strong>建安文学</strong>建立新诗歌风格；<strong>陶渊明</strong>开创包括《桃花源记》的隐逸诗；<strong>王羲之</strong>《兰亭序》成为\\\"天下第一行书\\\"；<strong>顾恺之</strong>创作《女史箴图》等杰作绘画。<strong>科学技术</strong>取得突破：<strong>祖冲之</strong>将圆周率精确计算到小数点后7位（1000年内保持世界最精确），<strong>贾思勰</strong>编纂中国最早综合农书《齐民要术》。经济发展包括中国经济重心南移和农业手工业技术创新。"
      },
      {
        title: "Ethnic Integration and Foundation for Reunification",
        chineseTitle: "民族融合与统一基础",
        content: "The period's greatest achievement was the <strong>Great Ethnic Integration</strong> that fundamentally transformed China's composition. <strong>Intermarriage between Chinese and barbarian elites</strong> created mixed ethnic aristocratic families, while <strong>cultural synthesis</strong> blended nomadic and sedentary traditions. The <strong>formation of expanded Chinese identity</strong> redefined what it meant to be \\\"Chinese,\\\" incorporating diverse ethnic elements. <strong>Administrative and political innovations</strong> included the decline of gate-valve politics, preparation for Sui-Tang examination systems, military innovations in cavalry tactics, and governmental structures tested under multiple regimes. <strong>Economic transformation</strong> established the Yangtze River valley as an economic powerhouse, developed commercial networks and trade routes, spread agricultural innovations throughout China, and promoted urban growth in southern China. <strong>Cultural pluralism</strong> saw the permanent coexistence of Confucianism, Buddhism, and Daoism, artistic innovation in multiple forms, intellectual freedom and philosophical experimentation, and educational diversity. This fragmented period paradoxically created conditions for later reunification through political innovations like Northern Zhou's Fubing System and Equal Field System, economic foundations with both north and south achieving productivity, cultural synthesis creating shared values, military preparation with professional armies and strategic knowledge, and social integration through elite intermarriage and cultural exchange. The Wei, Jin, and Northern and Southern Dynasties thus represents a paradox: an age of division that created unity, demonstrating how political fragmentation could foster cultural integration and generate strength for future imperial greatness.",
        chineseContent: "这一时期最大的成就是根本性改变中国构成的<strong>民族大融合</strong>。<strong>胡汉通婚</strong>创造混合民族贵族家族，而<strong>文化综合</strong>融合游牧和定居传统。<strong>扩展中华认同的形成</strong>重新定义\\\"中国人\\\"含义，融入多样化民族元素。<strong>行政政治创新</strong>包括门阀政治的衰落、隋唐科举制度的准备、骑兵战术的军事创新，以及在多个政权下测试的政府结构。<strong>经济转型</strong>确立长江流域为经济强区，发展商业网络和贸易路线，在全国传播农业创新，促进南方中国城市增长。<strong>文化多元主义</strong>见证了儒释道的永久并存、多种形式的艺术创新、知识自由和哲学实验，以及教育多样性。这一分裂时期矛盾地通过政治创新（如北周府兵制和均田制）、南北都实现生产力的经济基础、创造共同价值观的文化综合、职业军队和战略知识的军事准备，以及精英通婚和文化交流的社会整合，为后来的统一创造了条件。因此，魏晋南北朝代表一个悖论：分裂创造统一的时代，证明政治分裂如何促进文化融合并为未来帝国伟大产生力量。"
      }
    ],
    significance: "The Wei, Jin, and Northern and Southern Dynasties period represents one of the most complex and transformative eras in Chinese history. While characterized by political fragmentation and frequent warfare, this 370-year period laid crucial foundations for the golden age of the Sui and Tang dynasties. The period's greatest achievement was the Great Ethnic Integration that fundamentally expanded the definition of Chinese civilization through interaction between Han Chinese and various nomadic peoples, creating a more diverse and dynamic culture that would characterize imperial China for the next millennium. The successful integration of Buddhism into Chinese culture created the religious and philosophical synthesis central to East Asian civilization. Technologically and culturally, the period witnessed remarkable achievements from Zu Chongzhi's mathematical precision to Wang Xizhi's calligraphic artistry, from comprehensive agricultural manuals to Buddhist art in great grottoes, demonstrating that political division did not mean cultural decline. The period's political experiments provided crucial lessons for later unification, with Northern Zhou's military and administrative innovations becoming foundations for Tang governmental systems, while Southern Dynasties' cultural preservation ensured continuity of classical Chinese traditions. This era represents a paradox: an age of division that created unity, a time of conflict that fostered integration, and a period of apparent weakness that generated strength for future imperial greatness.",
    chineseSignificance: "魏晋南北朝时期代表中国历史上最复杂和变革性的时代之一。虽然以政治分裂和频繁战争为特征，这370年时期为隋唐盛世的黄金时代奠定了关键基础。这一时期最大的成就是民族大融合，通过汉族与各游牧民族的互动根本性地扩展了中华文明的定义，创造了更多样化和动态的文化，这将成为下一个千年帝制中国的特征。佛教成功融入中国文化，创造了成为东亚文明核心的宗教哲学综合体。在技术和文化上，这一时期见证了从祖冲之的数学精确到王羲之的书法艺术、从综合农业手册到大石窟佛教艺术的卓越成就，证明政治分裂不意味着文化衰落。这一时期的政治实验为后来的统一提供了关键教训，北周的军事行政创新成为唐朝政府制度的基础，而南朝的文化保存确保了中国古典传统的连续性。这个时代代表一个悖论：分裂创造统一的时代，冲突促进融合的时期，表面弱势产生未来帝国伟大力量的时代。"
  }
};

export interface WorldHistoryEvent extends HistoryEvent {
  country: string;
  countryName: string;
  flag: string;
}

export interface DateRange {
  start: number;
  end: number;
  display: string;
}

export function parseDateRange(dateStr: string): DateRange {
  const cleanDate = dateStr.replace(/c\.\s*/, '').trim();
  
  // Handle ranges like "1337-1453", "c. 2070-1600 BCE", "1941-1945"
  const rangeMatch = cleanDate.match(/(\d+)\s*[-–—]\s*(\d+)/);
  if (rangeMatch) {
    const start = parseInt(rangeMatch[1]);
    const end = parseInt(rangeMatch[2]);
    
    if (cleanDate.includes('BCE')) {
      return { start: -end, end: -start, display: dateStr };
    } else if (cleanDate.includes('CE')) {
      return { start, end, display: dateStr };
    } else {
      // Default to CE for modern dates
      return { start, end, display: dateStr };
    }
  }
  
  // Handle single years
  if (cleanDate.includes('BCE')) {
    const year = parseInt(cleanDate.match(/\d+/)?.[0] || '0');
    return { start: -year, end: -year, display: dateStr };
  } else if (cleanDate.includes('CE')) {
    const year = parseInt(cleanDate.match(/\d+/)?.[0] || '0');
    return { start: year, end: year, display: dateStr };
  } else {
    const yearMatch = cleanDate.match(/(\d{4})/);
    if (yearMatch) {
      const year = parseInt(yearMatch[1]);
      return { start: year, end: year, display: dateStr };
    }
    return { start: 0, end: 0, display: dateStr };
  }
}

export function parseDate(dateStr: string): number {
  const range = parseDateRange(dateStr);
  return range.start;
}

export function rangesOverlap(range1: DateRange, range2: DateRange, tolerance: number = 50): boolean {
  return range1.start <= range2.end + tolerance && range2.start <= range1.end + tolerance;
}

export interface GroupedTimelineEvent {
  dateRange: DateRange;
  events: WorldHistoryEvent[];
  displayDate: string;
}

export function getAllWorldEvents(): WorldHistoryEvent[] {
  const countryNames: Record<string, { name: string; flag: string }> = {
    china: { name: 'China', flag: '🇨🇳' },
    usa: { name: 'United States', flag: '🇺🇸' },
    uk: { name: 'United Kingdom', flag: '🇬🇧' },
    france: { name: 'France', flag: '🇫🇷' },
    korea: { name: 'South Korea', flag: '🇰🇷' },
    japan: { name: 'Japan', flag: '🇯🇵' },
    greece: { name: 'Greece', flag: '🇬🇷' },
    italy: { name: 'Italy', flag: '🇮🇹' }
  };

  const allEvents: WorldHistoryEvent[] = [];

  Object.entries(historyData).forEach(([countryId, countryData]) => {
    const countryInfo = countryNames[countryId];
    if (!countryInfo) return;

    countryData.events.forEach(event => {
      allEvents.push({
        ...event,
        country: countryId,
        countryName: countryInfo.name,
        flag: countryInfo.flag
      });
    });
  });

  return allEvents.sort((a, b) => parseDate(a.date) - parseDate(b.date));
}

export function getGroupedWorldEvents(): GroupedTimelineEvent[] {
  const allEvents = getAllWorldEvents();
  const groups: GroupedTimelineEvent[] = [];
  const processed = new Set<number>();

  allEvents.forEach((event, index) => {
    if (processed.has(index)) return;

    const eventRange = parseDateRange(event.date);
    const group: GroupedTimelineEvent = {
      dateRange: eventRange,
      events: [event],
      displayDate: event.date
    };

    // Find overlapping events
    for (let i = index + 1; i < allEvents.length; i++) {
      if (processed.has(i)) continue;

      const otherEvent = allEvents[i];
      const otherRange = parseDateRange(otherEvent.date);

      if (rangesOverlap(eventRange, otherRange)) {
        group.events.push(otherEvent);
        processed.add(i);
        
        // Expand the group's date range and update display
        group.dateRange.start = Math.min(group.dateRange.start, otherRange.start);
        group.dateRange.end = Math.max(group.dateRange.end, otherRange.end);
        
        // Create a combined display date for the group
        if (group.events.length === 2) {
          group.displayDate = `${group.events[0].date} / ${otherEvent.date}`;
        } else if (group.events.length > 2) {
          const startYear = group.dateRange.start < 0 ? `${Math.abs(group.dateRange.start)} BCE` : `${group.dateRange.start} CE`;
          const endYear = group.dateRange.end < 0 ? `${Math.abs(group.dateRange.end)} BCE` : `${group.dateRange.end} CE`;
          group.displayDate = group.dateRange.start === group.dateRange.end ? startYear : `${startYear} - ${endYear}`;
        }
      }
    }

    processed.add(index);
    groups.push(group);
  });

  return groups;
}

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
  ],
  dynasty: [
    {
      id: "xia",
      flag: "🏛️",
      name: "Xia Dynasty",
      summary: "China's first hereditary dynasty (c. 2070-1600 BCE). Discover Yu the Great's flood control, the establishment of hereditary rule, and legendary events that shaped Chinese political culture."
    },
    {
      id: "western_zhou",
      flag: "⚔️",
      name: "Western Zhou Dynasty",
      summary: "Foundation of Chinese civilization (1046-771 BCE). Explore the feudal system, ritual-music culture, Mandate of Heaven concept, and the legendary fall through 'playing with fire signals.'"
    },
    {
      id: "eastern_zhou",
      flag: "🏛️",
      name: "Eastern Zhou Dynasty",
      summary: "China's longest dynasty and intellectual golden age (770-256 BCE). Discover the Spring and Autumn period, Warring States, Hundred Schools of Thought, and the rise of Confucianism."
    },
    {
      id: "qin",
      flag: "🐲",
      name: "Qin Dynasty",
      summary: "China's first unified empire (221-207 BCE). Explore the conquest of six states, standardization policies, Great Wall construction, harsh legalism, and dramatic collapse that ended 15 years of transformative rule."
    },
    {
      id: "western_han",
      flag: "🏛️",
      name: "Western Han Dynasty",
      summary: "Foundation of Han civilization (202 BCE - 8 CE). Discover the golden age of Wen and Jing, Emperor Wu's expansion, Silk Road establishment, Confucian state ideology, and cultural achievements that defined Chinese identity."
    },
    {
      id: "eastern_han",
      flag: "📜",
      name: "Eastern Han Dynasty",
      summary: "Revival and intellectual flourishing (25-220 CE). Explore the Guangwu Restoration, papermaking invention, Buddhist introduction, Ban Chao's Silk Road diplomacy, and the eunuch-consort struggles that led to the Yellow Turban Rebellion."
    },
    {
      id: "wei_jin_southern_northern",
      flag: "⚔️",
      name: "Wei, Jin, and Northern & Southern Dynasties",
      summary: "Era of division and cultural flowering (220-589 CE). Discover the Three Kingdoms rivalry, Western Jin's brief reunification, barbarian invasions, ethnic integration, Buddhist flourishing, and innovations that prepared for Sui-Tang reunification."
    }
  ]
};