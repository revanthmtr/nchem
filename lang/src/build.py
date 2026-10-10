# -*- coding: utf-8 -*-
"""Build lang/{te,kn,ta}.js from the hand-written translation tables."""
import json, re, sys, os
sys.path.insert(0, os.path.dirname(__file__))
from part1 import T1
from part2 import T2
from part3 import T3, P, KEEP
from part4 import T4
from part5 import T5
from part6 import T6
from part7 import T7, CROPS
PACKS = json.load(open(os.path.join(os.path.dirname(__file__), 'packs.json')))
COMPOSITIONS = json.load(open(os.path.join(os.path.dirname(__file__), 'compositions.json')))
STAGE_NAMES = json.load(open(os.path.join(os.path.dirname(__file__), 'stage_names.json')))

LEAD = re.compile(r'^[^\w(]+', re.U)
TRAIL = re.compile(r'[^\w.,:;!?)%+*\']+$', re.U)
def core(s):
    s = re.sub(r'\s+', ' ', s).strip()
    return TRAIL.sub('', LEAD.sub('', s)).strip()

# Plain text entry for the catalog intro (its count span is updated live by script.js)
EXTRA = [("Certified bio-stimulants, chelated micronutrients, microbial bio-fertilizers, and stage-specific nutrition programs.",
  "సర్టిఫైడ్ జీవ ఉత్ప్రేరకాలు, చెలేటెడ్ సూక్ష్మ పోషకాలు, సూక్ష్మజీవి ఎరువులు, పంట దశల వారీ పోషణ.",
  "ಪ್ರಮಾಣೀಕೃತ ಜೈವಿಕ ಪ್ರಚೋದಕಗಳು, ಚೆಲೇಟೆಡ್ ಸೂಕ್ಷ್ಮ ಪೋಷಕಾಂಶಗಳು, ಸೂಕ್ಷ್ಮಜೀವಿ ಗೊಬ್ಬರಗಳು, ಬೆಳೆ ಹಂತವಾರು ಪೋಷಣೆ.",
  "சான்றளிக்கப்பட்ட உயிர் ஊக்கிகள், செலேட்டட் நுண்ணூட்டங்கள், நுண்ணுயிர் உரங்கள், பயிர் பருவ வாரியான ஊட்டம்."),
 ("Search pest, crop, nutrient, formula...", "పురుగు, పంట, పోషకం, ఉత్పత్తి పేరుతో వెతకండి...", "ಕೀಟ, ಬೆಳೆ, ಪೋಷಕಾಂಶ, ಉತ್ಪನ್ನದ ಹೆಸರಿನಿಂದ ಹುಡುಕಿ...", "பூச்சி, பயிர், ஊட்டம், தயாரிப்புப் பெயரால் தேடுங்கள்..."),
 ("Search by name, crop, active formula...", "పేరు, పంట, ఫార్ములాతో వెతకండి...", "ಹೆಸರು, ಬೆಳೆ, ಫಾರ್ಮುಲಾದಿಂದ ಹುಡುಕಿ...", "பெயர், பயிர், ஃபார்முலாவால் தேடுங்கள்..."),
 ("Search formulations, nutrients, crops, or actives...", "ఉత్పత్తులు, పోషకాలు, పంటలతో వెతకండి...", "ಉತ್ಪನ್ನ, ಪೋಷಕಾಂಶ, ಬೆಳೆಗಳಿಂದ ಹುಡುಕಿ...", "தயாரிப்பு, ஊட்டம், பயிர்களால் தேடுங்கள்..."),
 ("Enter your email or mobile number...", "మీ ఈమెయిల్ లేదా మొబైల్ నంబర్...", "ನಿಮ್ಮ ಇಮೇಲ್ ಅಥವಾ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ...", "உங்கள் மின்னஞ்சல் அல்லது மொபைல் எண்..."),
 ("Order Stage Kit via Helpline", "హెల్ప్‌లైన్ ద్వారా ఈ కిట్ ఆర్డర్ చేయండి", "ಸಹಾಯವಾಣಿ ಮೂಲಕ ಈ ಕಿಟ್ ಆರ್ಡರ್ ಮಾಡಿ", "உதவி எண் மூலம் இந்தக் கிட்டை ஆர்டர் செய்யுங்கள்"),
 ("View Full Season Matrix", "పూర్తి సీజన్ ప్లాన్ చూడండి", "ಸಂಪೂರ್ಣ ಹಂಗಾಮಿನ ಯೋಜನೆ ನೋಡಿ", "முழுப் பருவத் திட்டத்தைப் பாருங்கள்"),
 ("Specialized Bio-Formula Kit", "ప్రత్యేక జీవ ఫార్ములా కిట్", "ವಿಶೇಷ ಜೈವಿಕ ಫಾರ್ಮುಲಾ ಕಿಟ್", "சிறப்பு உயிர் ஃபார்முலா கிட்"),
 ("Gen", "అన్ని సీజన్లు", "ಎಲ್ಲಾ ಹಂಗಾಮು", "அனைத்துப் பருவம்"),
 ("White Root Surge & Soil Health", "తెల్ల వేర్లు & నేల ఆరోగ్యం", "ಬಿಳಿ ಬೇರು & ಮಣ್ಣಿನ ಆರೋಗ್ಯ", "வெள்ளை வேர் & மண் வளம்"),
 ("Flower Setting & Drop Prevention", "పూత & రాలకుండా నివారణ", "ಹೂವು ಕಟ್ಟುವಿಕೆ & ಉದುರುವಿಕೆ ತಡೆ", "பூப் பிடிப்பு & உதிர்வுத் தடுப்பு"),
 ("Biological Pest & Mite Control", "పురుగులు & నల్లికి జీవ నివారణ", "ಕೀಟ & ನುಸಿಗೆ ಜೈವಿಕ ನಿಯಂತ್ರಣ", "பூச்சி & சிலந்திப்பேனுக்கு உயிர் கட்டுப்பாடு"),
 ("Fungal Mildew & Anti-Blight Defense", "బూజు & ఎండు తెగుళ్ల నుంచి రక్షణ", "ಬೂದು ರೋಗ & ಅಂಗಮಾರಿಯಿಂದ ರಕ್ಷಣೆ", "சாம்பல் நோய் & கருகலிலிருந்து பாதுகாப்பு"),
 ("Root-Knot Nematode Protection", "వేరు బుడిపెల నులిపురుగుల నుంచి రక్షణ", "ಬೇರು ಗಂಟು ಜಂತುಹುಳುವಿನಿಂದ ರಕ್ಷಣೆ", "வேர் முடிச்சு நூற்புழுவிலிருந்து பாதுகாப்பு"),
 ("Fruit Sizing, Color & Brix Boost", "కాయ సైజు, రంగు & తీపి పెంపు", "ಹಣ್ಣಿನ ಗಾತ್ರ, ಬಣ್ಣ & ಸಿಹಿ ಹೆಚ್ಚಳ", "காய் அளவு, நிறம் & இனிப்பு உயர்வு"),
 ("Full Name & Designation", "పూర్తి పేరు & హోదా", "ಪೂರ್ಣ ಹೆಸರು & ಹುದ್ದೆ", "முழுப் பெயர் & பதவி")]
EXTRA_PATTERNS = {'te': [['^Search Results for "(.+)"$', '"$1" కోసం ఫలితాలు'], ['^Filtered by Subcategory: (.+)$', 'ఉప విభాగం: $T1'], ['^Filtered by Pillar: (.+)$', 'విభాగం: $T1'], ['^Specialized Solutions for (.+) Cultivation$', '$T1 సాగుకు ప్రత్యేక పరిష్కారాలు'], ['^Targeted for: (.+)$', 'దీని కోసం: $T1'], ['^(\\d+) Formulation$', '$1 ఉత్పత్తి'], ['^Pillar (\\d+): (.+) \\((\\d+) Products\\)$', 'విభాగం $1: $T2 ($3 ఉత్పత్తులు)'], ['^Pillar (\\d+): (.+) \\((\\d+) Stage Kits\\)$', 'విభాగం $1: $T2 ($3 దశల కిట్లు)']], 'kn': [['^Search Results for "(.+)"$', '"$1" ಗಾಗಿ ಫಲಿತಾಂಶಗಳು'], ['^Filtered by Subcategory: (.+)$', 'ಉಪ ವಿಭಾಗ: $T1'], ['^Filtered by Pillar: (.+)$', 'ವಿಭಾಗ: $T1'], ['^Specialized Solutions for (.+) Cultivation$', '$T1 ಬೆಳೆಗೆ ವಿಶೇಷ ಪರಿಹಾರಗಳು'], ['^Targeted for: (.+)$', 'ಇದಕ್ಕಾಗಿ: $T1'], ['^(\\d+) Formulation$', '$1 ಉತ್ಪನ್ನ'], ['^Pillar (\\d+): (.+) \\((\\d+) Products\\)$', 'ವಿಭಾಗ $1: $T2 ($3 ಉತ್ಪನ್ನಗಳು)'], ['^Pillar (\\d+): (.+) \\((\\d+) Stage Kits\\)$', 'ವಿಭಾಗ $1: $T2 ($3 ಹಂತದ ಕಿಟ್\u200cಗಳು)']], 'ta': [['^Search Results for "(.+)"$', '"$1" க்கான முடிவுகள்'], ['^Filtered by Subcategory: (.+)$', 'துணைப் பிரிவு: $T1'], ['^Filtered by Pillar: (.+)$', 'பிரிவு: $T1'], ['^Specialized Solutions for (.+) Cultivation$', '$T1 சாகுபடிக்கான சிறப்புத் தீர்வுகள்'], ['^Targeted for: (.+)$', 'இதற்காக: $T1'], ['^(\\d+) Formulation$', '$1 தயாரிப்பு'], ['^Pillar (\\d+): (.+) \\((\\d+) Products\\)$', 'பிரிவு $1: $T2 ($3 தயாரிப்புகள்)'], ['^Pillar (\\d+): (.+) \\((\\d+) Stage Kits\\)$', 'பிரிவு $1: $T2 ($3 பருவ கிட்கள்)']]}
PATTERNS = {
  'te': [[r'^(.+) › (.+)$', '$T1 › $T2'],[r'^Day (\d+) – (\d+)$', '$1 – $2 రోజులు'], [r'^Stage Milestone (\S+) • (.+) Lifecycle$', 'దశ $1 • $T2 పంట కాలం'],[r'^Visitor Count: ([\d,]+)$', 'సందర్శకులు: $1'], [r'^(.+) Stage Nutrition Program$', '$T1 దశల వారీ పోషణ ప్లాన్'],[r'^\(Showing (\d+) Formulations\)$', '($1 ఉత్పత్తులు)'], [r'^(\d+) Formulations$', '$1 ఉత్పత్తులు'], [r'^(\d+) SKUs$', '$1 ఉత్పత్తులు']],
  'kn': [[r'^(.+) › (.+)$', '$T1 › $T2'],[r'^Day (\d+) – (\d+)$', '$1 – $2 ದಿನಗಳು'], [r'^Stage Milestone (\S+) • (.+) Lifecycle$', 'ಹಂತ $1 • $T2 ಬೆಳೆ ಅವಧಿ'],[r'^Visitor Count: ([\d,]+)$', 'ಭೇಟಿ ನೀಡಿದವರು: $1'], [r'^(.+) Stage Nutrition Program$', '$T1 ಹಂತವಾರು ಪೋಷಣೆ ಯೋಜನೆ'],[r'^\(Showing (\d+) Formulations\)$', '($1 ಉತ್ಪನ್ನಗಳು)'], [r'^(\d+) Formulations$', '$1 ಉತ್ಪನ್ನಗಳು'], [r'^(\d+) SKUs$', '$1 ಉತ್ಪನ್ನಗಳು']],
  'ta': [[r'^(.+) › (.+)$', '$T1 › $T2'],[r'^Day (\d+) – (\d+)$', '$1 – $2 நாட்கள்'], [r'^Stage Milestone (\S+) • (.+) Lifecycle$', 'பருவம் $1 • $T2 பயிர்க் காலம்'],[r'^Visitor Count: ([\d,]+)$', 'பார்வையாளர்கள்: $1'], [r'^(.+) Stage Nutrition Program$', '$T1 பருவ வாரியான ஊட்டத் திட்டம்'],[r'^\(Showing (\d+) Formulations\)$', '($1 தயாரிப்புகள்)'], [r'^(\d+) Formulations$', '$1 தயாரிப்புகள்'], [r'^(\d+) SKUs$', '$1 தயாரிப்புகள்']],
}
prose = [p for p in P if not p[0].startswith('Certified bio-stimulants')]
rows = T1 + T2 + T3 + T4 + T5 + T6 + T7 + EXTRA
idx = {'te': 1, 'kn': 2, 'ta': 3}
dupes = set()
for lang, i in idx.items():
    text, seen = {}, set()
    for r in rows:
        k = core(r[0])
        if k in seen and text[k] != r[i]: dupes.add(k)
        seen.add(k); text[k] = r[i]
    data = {'text': text, 'prose': {re.sub(r'\s+', ' ', p[0]).strip(): p[i] for p in prose},
            'crops': sorted([[c[0], c[i]] for c in CROPS], key=lambda x: -len(x[0])), 'keep': [core(k) for k in KEEP + STAGE_NAMES + COMPOSITIONS + PACKS], 'patterns': PATTERNS[lang] + EXTRA_PATTERNS[lang]}
    out = 'window.NCHEM_I18N=window.NCHEM_I18N||{};window.NCHEM_I18N.%s=%s;\n' % (lang, json.dumps(data, ensure_ascii=False, separators=(',', ':')))
    open(os.path.join(os.path.dirname(__file__), '..', lang + '.js'), 'w').write(out)
    print(lang, len(text), 'texts', len(data['prose']), 'prose', len(out) // 1024, 'KB')
if dupes: print('conflicting duplicates:', dupes)

# Coverage check against the page's own text
SP = sys.argv[1] if len(sys.argv) > 1 else None
if SP:
    d = json.load(open(SP))
    keys = set(core(r[0]) for r in rows) | set(core(k) for k in KEEP + STAGE_NAMES + COMPOSITIONS)
    pk = set(re.sub(r'\s+', ' ', p[0]).strip() for p in P)
    miss = [t for t in d['texts'] if core(t) not in keys and core(t)]
    missp = [p['k'] for p in d['prose'] if p['k'] not in pk]
    print('missing texts:', len(miss)); [print('  -', m) for m in miss]
    print('missing prose:', missp)

PJ = sys.argv[2] if len(sys.argv) > 2 else None
if PJ:
    pd = json.load(open(PJ))
    keys = set(core(r[0]) for r in rows)
    for f in ('dosage', 'desc'):
        miss = [x for x in pd[f] if core(x) not in keys]
        print('missing', f, len(miss)); [print('  -', m) for m in miss]
