#include <Date.au3>  ;  1 = Sun  2 = Mon  3 = Tue  4 = Wed  5 = Thu  6 = Fri  7 = Sat
#include <ButtonConstants.au3>
#include <EditConstants.au3>
#include <GUIConstantsEx.au3>
#include <StaticConstants.au3>
#include <WindowsConstants.au3>
#include <guimenu.au3>

$StartTime1 = "16:55"
$EndTime1 = "16:56"

;AdlibRegister("_Check",1000*60);check every minute


#Region ### START Koda GUI section ### Form=C:\Users\JU317087\Documents\form2.kxf
;$gui = GUICreate("Disable exit button", 400, 400, -1, -1, )
$Form1 = GUICreate("Sentimental Analysis", 777, 586, 233, 32, BitOR($WS_SYSMENU, $WS_CAPTION))
$Label1 = GUICtrlCreateLabel("Intensity of Feelings", 17, 72, 115, 35, BitOR($SS_CENTER,$SS_CENTERIMAGE))
GUICtrlSetFont(-1, 9, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0xFFFFFF)
GUICtrlSetBkColor(-1, 0x000000)
$Label2 = GUICtrlCreateLabel("HAPPY", 140, 71, 115, 35, BitOR($SS_CENTER,$SS_CENTERIMAGE))
GUICtrlSetFont(-1, 9, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0xFFFFFF)
GUICtrlSetBkColor(-1, 0x000000)
$Label3 = GUICtrlCreateLabel("SAD", 263, 71, 115, 35, BitOR($SS_CENTER,$SS_CENTERIMAGE))
GUICtrlSetFont(-1, 9, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0xFFFFFF)
GUICtrlSetBkColor(-1, 0x000000)
$Label4 = GUICtrlCreateLabel("ANGRY", 386, 71, 115, 35, BitOR($SS_CENTER,$SS_CENTERIMAGE))
GUICtrlSetFont(-1, 9, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0xFFFFFF)
GUICtrlSetBkColor(-1, 0x000000)
$Label5 = GUICtrlCreateLabel("AFRAID", 510, 71, 115, 34, BitOR($SS_CENTER,$SS_CENTERIMAGE))
GUICtrlSetFont(-1, 9, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0xFFFFFF)
GUICtrlSetBkColor(-1, 0x000000)
$Label6 = GUICtrlCreateLabel("ASHAMED", 634, 71, 115, 34, BitOR($SS_CENTER,$SS_CENTERIMAGE))
GUICtrlSetFont(-1, 9, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0xFFFFFF)
GUICtrlSetBkColor(-1, 0x000000)
$Label7 = GUICtrlCreateLabel("HIGH", 17, 111, 115, 140, BitOR($SS_CENTER,$SS_CENTERIMAGE))
GUICtrlSetFont(-1, 9, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0xFFFFFF)
GUICtrlSetBkColor(-1, 0x000000)
$Group2 = GUICtrlCreateGroup("", 161, 106, 94, 145)
$Label8 = GUICtrlCreateLabel("Elated", 167, 119, 36, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label9 = GUICtrlCreateLabel("Excited", 167, 135, 41, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label10 = GUICtrlCreateLabel("Overjoyed", 167, 151, 58, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label11 = GUICtrlCreateLabel("Thrilled", 167, 167, 46, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label12 = GUICtrlCreateLabel("Exuberant", 167, 183, 57, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label13 = GUICtrlCreateLabel("Ecstatic", 167, 198, 43, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label14 = GUICtrlCreateLabel("Fired up", 167, 214, 47, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label15 = GUICtrlCreateLabel("Passionate", 167, 230, 60, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
GUICtrlCreateGroup("", -99, -99, 1, 1)
$Group3 = GUICtrlCreateGroup("", 284, 106, 94, 145)
$Label16 = GUICtrlCreateLabel("Depressed", 290, 119, 57, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label17 = GUICtrlCreateLabel("Agonized", 290, 135, 53, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label18 = GUICtrlCreateLabel("Alone", 290, 151, 35, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label19 = GUICtrlCreateLabel("Hurt", 290, 167, 29, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label20 = GUICtrlCreateLabel("Hopeless", 290, 198, 51, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label21 = GUICtrlCreateLabel("Dejected", 290, 182, 49, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label22 = GUICtrlCreateLabel("Sorrowful", 290, 214, 56, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label23 = GUICtrlCreateLabel("Miserable", 290, 230, 56, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
GUICtrlCreateGroup("", -99, -99, 1, 1)
$Group4 = GUICtrlCreateGroup("", 407, 106, 94, 145)
$Label24 = GUICtrlCreateLabel("Furious", 413, 119, 44, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label25 = GUICtrlCreateLabel("Enraged", 413, 135, 46, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label26 = GUICtrlCreateLabel("Outraged", 413, 151, 54, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label27 = GUICtrlCreateLabel("Boiling", 413, 167, 43, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label28 = GUICtrlCreateLabel("Seething", 413, 198, 51, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label29 = GUICtrlCreateLabel("Irate", 413, 182, 29, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label30 = GUICtrlCreateLabel("Loathsome", 413, 214, 61, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label31 = GUICtrlCreateLabel("Betrayed", 413, 230, 51, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
GUICtrlCreateGroup("", -99, -99, 1, 1)
$Group5 = GUICtrlCreateGroup("", 531, 106, 94, 145)
$Label32 = GUICtrlCreateLabel("Terrified", 537, 119, 50, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label33 = GUICtrlCreateLabel("Horrified", 537, 135, 53, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label34 = GUICtrlCreateLabel("Scared Stiff", 537, 151, 65, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label35 = GUICtrlCreateLabel("Petrified", 537, 167, 50, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label36 = GUICtrlCreateLabel("Panicky", 537, 198, 46, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label37 = GUICtrlCreateLabel("Fearful", 537, 182, 42, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label38 = GUICtrlCreateLabel("Frantic", 537, 214, 41, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label39 = GUICtrlCreateLabel("Shocked", 537, 230, 48, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
GUICtrlCreateGroup("", -99, -99, 1, 1)
$Group6 = GUICtrlCreateGroup("", 654, 106, 94, 145)
$Label40 = GUICtrlCreateLabel("Sorrowful", 660, 119, 56, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label41 = GUICtrlCreateLabel("Remorseful", 660, 135, 65, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label42 = GUICtrlCreateLabel("Defamed", 660, 151, 50, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label43 = GUICtrlCreateLabel("Worthless", 660, 167, 58, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label44 = GUICtrlCreateLabel("Dishonored", 660, 198, 64, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label45 = GUICtrlCreateLabel("Disgraced", 660, 182, 55, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label46 = GUICtrlCreateLabel("Motrtified", 660, 214, 57, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label47 = GUICtrlCreateLabel("Admonished", 660, 230, 69, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
GUICtrlCreateGroup("", -99, -99, 1, 1)
$Label48 = GUICtrlCreateLabel("MEDIUM", 17, 262, 113, 108, BitOR($SS_CENTER,$SS_CENTERIMAGE))
GUICtrlSetFont(-1, 9, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0xFFFFFF)
GUICtrlSetBkColor(-1, 0x808080)
$Group7 = GUICtrlCreateGroup("", 163, 256, 94, 113)
$Label49 = GUICtrlCreateLabel("Cheerful", 169, 269, 52, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label50 = GUICtrlCreateLabel("Gratified", 169, 285, 52, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label51 = GUICtrlCreateLabel("Good", 169, 301, 31, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label52 = GUICtrlCreateLabel("Relieved", 169, 317, 49, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label53 = GUICtrlCreateLabel("Satisfied", 169, 333, 50, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label54 = GUICtrlCreateLabel("Glowing", 169, 348, 48, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
GUICtrlCreateGroup("", -99, -99, 1, 1)
$Label79 = GUICtrlCreateLabel("LOW", 17, 382, 113, 108, BitOR($SS_CENTER,$SS_CENTERIMAGE))
GUICtrlSetFont(-1, 9, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0xFFFFFF)
GUICtrlSetBkColor(-1, 0xC0C0C0)
$Group8 = GUICtrlCreateGroup("", 284, 256, 92, 113)
$Label55 = GUICtrlCreateLabel("Heartbroken", 290, 269, 71, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label56 = GUICtrlCreateLabel("Somber", 290, 285, 44, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label57 = GUICtrlCreateLabel("Lost", 290, 301, 26, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label58 = GUICtrlCreateLabel("Destressed", 290, 317, 60, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label59 = GUICtrlCreateLabel("Let Down", 290, 333, 53, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label60 = GUICtrlCreateLabel("Melancholy", 290, 348, 65, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
GUICtrlCreateGroup("", -99, -99, 1, 1)
$Group9 = GUICtrlCreateGroup("", 407, 256, 94, 113)
$Label61 = GUICtrlCreateLabel("Upset", 413, 269, 33, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label62 = GUICtrlCreateLabel("Mad", 413, 285, 26, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label63 = GUICtrlCreateLabel("Defended", 413, 301, 53, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label64 = GUICtrlCreateLabel("Frustrated", 413, 317, 58, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label65 = GUICtrlCreateLabel("Agitated", 413, 333, 48, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label66 = GUICtrlCreateLabel("Disgusted", 413, 348, 55, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
GUICtrlCreateGroup("", -99, -99, 1, 1)
$Group10 = GUICtrlCreateGroup("", 531, 256, 94, 113)
$Label67 = GUICtrlCreateLabel("Apprehensive", 537, 269, 75, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label68 = GUICtrlCreateLabel("Frightened", 537, 285, 61, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label71 = GUICtrlCreateLabel("Uneasy", 537, 349, 42, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label72 = GUICtrlCreateLabel("Intimitated", 537, 332, 63, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label70 = GUICtrlCreateLabel("Threatened", 537, 302, 63, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label110 = GUICtrlCreateLabel("Insecure", 537, 318, 49, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
GUICtrlCreateGroup("", -99, -99, 1, 1)
$Group11 = GUICtrlCreateGroup("", 654, 256, 94, 113)
$Label73 = GUICtrlCreateLabel("Apologetic", 660, 269, 59, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label74 = GUICtrlCreateLabel("Unworthy", 660, 285, 55, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label76 = GUICtrlCreateLabel("Embarrassed", 660, 333, 70, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label77 = GUICtrlCreateLabel("Secretive", 660, 349, 52, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label78 = GUICtrlCreateLabel("Guilty", 660, 316, 38, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label75 = GUICtrlCreateLabel("Sneaky", 662, 301, 43, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
GUICtrlCreateGroup("", -99, -99, 1, 1)
$Group12 = GUICtrlCreateGroup("", 161, 376, 94, 113)
$Label80 = GUICtrlCreateLabel("Glad", 167, 389, 29, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label81 = GUICtrlCreateLabel("Contented", 167, 405, 59, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label82 = GUICtrlCreateLabel("Pleasant", 167, 421, 49, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label83 = GUICtrlCreateLabel("Pleased", 167, 453, 44, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label84 = GUICtrlCreateLabel("Mellow", 167, 469, 42, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label85 = GUICtrlCreateLabel("Tender", 167, 436, 40, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
GUICtrlCreateGroup("", -99, -99, 1, 1)
$Group13 = GUICtrlCreateGroup("", 284, 376, 94, 113)
$Label86 = GUICtrlCreateLabel("Unhappy", 290, 389, 50, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label87 = GUICtrlCreateLabel("Moody", 290, 405, 38, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label88 = GUICtrlCreateLabel("Blue", 290, 421, 29, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label89 = GUICtrlCreateLabel("Disappointed", 290, 453, 72, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label90 = GUICtrlCreateLabel("Dissatisfied", 290, 469, 65, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label91 = GUICtrlCreateLabel("Upset", 290, 436, 33, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
GUICtrlCreateGroup("", -99, -99, 1, 1)
$Group14 = GUICtrlCreateGroup("", 407, 376, 94, 113)
$Label92 = GUICtrlCreateLabel("Peturbed", 413, 389, 51, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label93 = GUICtrlCreateLabel("Annoyed", 413, 405, 50, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label94 = GUICtrlCreateLabel("Uptight", 413, 421, 43, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label95 = GUICtrlCreateLabel("Irritated", 413, 453, 48, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label96 = GUICtrlCreateLabel("Touchy", 413, 469, 41, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label97 = GUICtrlCreateLabel("Resistant", 413, 436, 53, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
GUICtrlCreateGroup("", -99, -99, 1, 1)
$Group15 = GUICtrlCreateGroup("", 531, 376, 94, 113)
$Label98 = GUICtrlCreateLabel("Cautious", 537, 389, 52, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label99 = GUICtrlCreateLabel("Nervous", 537, 405, 46, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label100 = GUICtrlCreateLabel("Worried", 537, 421, 48, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label101 = GUICtrlCreateLabel("Unsure", 537, 453, 42, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label102 = GUICtrlCreateLabel("Anxious", 537, 469, 47, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label103 = GUICtrlCreateLabel("Timid", 537, 436, 34, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
GUICtrlCreateGroup("", -99, -99, 1, 1)
$Group16 = GUICtrlCreateGroup("", 654, 376, 94, 113)
$Label104 = GUICtrlCreateLabel("Bashful", 660, 389, 45, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label105 = GUICtrlCreateLabel("Ridiculous", 660, 405, 60, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label106 = GUICtrlCreateLabel("Regretful", 660, 421, 54, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label107 = GUICtrlCreateLabel("Pitied", 660, 453, 35, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label108 = GUICtrlCreateLabel("Silly", 660, 469, 29, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
$Label109 = GUICtrlCreateLabel("Uncomfortable", 660, 436, 81, 17)
GUICtrlSetFont(-1, 8, 800, 0, "Times New Roman")
GUICtrlSetColor(-1, 0x808080)
GUICtrlCreateGroup("", -99, -99, 1, 1)
$Button1 = GUICtrlCreateButton("Submit", 620, 516, 129, 35, $WS_GROUP)
GUICtrlSetBkColor(-1, 0xB4B4B4)
$Radio1 = GUICtrlCreateRadio("", 141, 120, 15, 17)
$Radio2 = GUICtrlCreateRadio("", 264, 120, 15, 17)
$Radio3 = GUICtrlCreateRadio("", 386, 120, 15, 17)
$Radio4 = GUICtrlCreateRadio("", 511, 120, 15, 17)
$Radio5 = GUICtrlCreateRadio("", 635, 120, 15, 17)
$Radio6 = GUICtrlCreateRadio("", 141, 264, 15, 17)
$Radio7 = GUICtrlCreateRadio("", 264, 264, 15, 17)
$Radio8 = GUICtrlCreateRadio("", 386, 261, 15, 25)
$Radio9 = GUICtrlCreateRadio("", 511, 266, 15, 17)
$Radio10 = GUICtrlCreateRadio("", 635, 261, 15, 25)
$Radio11 = GUICtrlCreateRadio("", 141, 388, 15, 17)
$Radio12 = GUICtrlCreateRadio("", 264, 385, 15, 25)
$Radio13 = GUICtrlCreateRadio("", 386, 388, 15, 25)
$Radio14 = GUICtrlCreateRadio("", 511, 388, 15, 17)
$Radio15 = GUICtrlCreateRadio("", 635, 388, 15, 17)
$Input1 = GUICtrlCreateInput("", 16, 516, 588, 35)
$Label69 = GUICtrlCreateLabel("Comments", 16, 496, 53, 17)
$Label112 = GUICtrlCreateLabel("Hello, How are you feeling today?", 16, 24, 362, 33)
GUICtrlSetFont(-1, 18, 400, 0, "MS Sans Serif")
GUICtrlSetColor(-1, 0x000000)
;GUISetState(@SW_SHOW)
#EndRegion ### END Koda GUI section ###



Local $idMsg
Global $status
Global $result
;Global $answered = False
Global $name = @UserName
Global $comments
Global $answered = True
;Global $Date = _NowDate()
ConsoleWrite(_NowTime());


;$close = GUICtrlCreateButton("", 0, 0, 0, 0)


GUISetState()

$menu = _GUICtrlMenu_GetSystemMenu($Form1)
_GUICtrlMenu_EnableMenuItem($menu, $SC_CLOSE, 1, False)

While 1;just idle around
Sleep(1000)
$idMsg = GUIGetMsg()
   If  $answered = False Then
   GUISetState(@SW_SHOW)
			Select
				Case $idMsg = $Radio1 And BitAND(GUICtrlRead($Radio1), $GUI_CHECKED) = $GUI_CHECKED
					$result = "High_Happy"
				Case $idMsg = $Radio2 And BitAND(GUICtrlRead($Radio2), $GUI_CHECKED) = $GUI_CHECKED
					$result = "High_Sad"
				Case $idMsg = $Radio3 And BitAND(GUICtrlRead($Radio3), $GUI_CHECKED) = $GUI_CHECKED
					$result = "High_Angry"
			    Case $idMsg = $Radio4 And BitAND(GUICtrlRead($Radio4), $GUI_CHECKED) = $GUI_CHECKED
					$result = "High_Afraid"
			    Case $idMsg = $Radio5 And BitAND(GUICtrlRead($Radio5), $GUI_CHECKED) = $GUI_CHECKED
					$result = "High_Ashamed"
				Case $idMsg = $Radio6 And BitAND(GUICtrlRead($Radio6), $GUI_CHECKED) = $GUI_CHECKED
					$result = "Medium_Happy"
				Case $idMsg = $Radio7 And BitAND(GUICtrlRead($Radio7), $GUI_CHECKED) = $GUI_CHECKED
					$result = "Medium_Sad"
			    Case $idMsg = $Radio8 And BitAND(GUICtrlRead($Radio8), $GUI_CHECKED) = $GUI_CHECKED
					$result = "Medium_Angry"
			    Case $idMsg = $Radio9 And BitAND(GUICtrlRead($Radio9), $GUI_CHECKED) = $GUI_CHECKED
					$result = "Medium_Afraid"
				Case $idMsg = $Radio10 And BitAND(GUICtrlRead($Radio10), $GUI_CHECKED) = $GUI_CHECKED
					$result = "Medium_Ashamed"
				Case $idMsg = $Radio11 And BitAND(GUICtrlRead($Radio11), $GUI_CHECKED) = $GUI_CHECKED
					$result = "Low_Happy"
			    Case $idMsg = $Radio12 And BitAND(GUICtrlRead($Radio12), $GUI_CHECKED) = $GUI_CHECKED
					$result = "Low_Sad"
			    Case $idMsg = $Radio13 And BitAND(GUICtrlRead($Radio13), $GUI_CHECKED) = $GUI_CHECKED
					$result = "Low_Angry"
				Case $idMsg = $Radio14 And BitAND(GUICtrlRead($Radio14), $GUI_CHECKED) = $GUI_CHECKED
					$result = "Low_Afraid"
			    Case $idMsg = $Radio15 And BitAND(GUICtrlRead($Radio15), $GUI_CHECKED) = $GUI_CHECKED
					$result = "Low_Ashamed"

				Case $idMsg = $Button1
					If $result then
					   $comment = GUICtrlRead($input1)
					   ConsoleWrite($comment)
					    ;ConsoleWrite("Before answered" & $answered)
						;$answered = True;
						;ConsoleWrite("After answered" & $answered)
						$status = sendData($result)
						;$endTime = @HOUR  - 10;
						If $status <> 200 then
						 MsgBox(4096, "Error", $status)
						Else
						 MsgBox(4096,"Success","Feedback submitted Successfully")
					  EndIf
					    $answered = True
						GUISetState(@SW_HIDE);
						Exit
					Else
						MsgBox(0,"Invalid","Please choose your feedback");
					EndIf
				Case $idMsg = $GUI_EVENT_CLOSE
					;GUISetState(@SW_HIDE);
					;Exit
				 EndSelect
			  Else
				  GUISetState(@SW_HIDE)
				  ConsoleWrite($answered)
			  EndIf
			Check2();
WEnd


Func Check2();every minute we check
   $CurrentTime = _NowTime(4);the current time
   If $CurrentTime = "19:23" Then
	  $answered = False
	  ;ConsoleWrite($answered)
   EndIf
   ;ConsoleWrite("Inside Check Function")
   ;$CurrentTime = _NowTime(4);the current time
   ;Switch @WDAY;check for D-day and start the program (a message in this case)
   ;Case 1, 2, 3, 4, 5, 6, 7
   ;If BitOR($CurrentTime >= $StartTime1, $CurrentTime <= $EndTime1) Then GUISetState(@SW_SHOW)

   ;EndSwitch
   ;AdlibUnRegister();unregister the running function
   ;Exit;and exit
EndFunc



Func sendData($result)
			   ConsoleWrite("Inside Send Data")
			   ; The data to be sent
			   $sPD = 'feedback='&$result&'-'&@UserName&'-'&$comment
			   ; Creating the object
			   $oHTTP = ObjCreate("winhttp.winhttprequest.5.1")
			   $oHTTP.Open("POST", "http://10.200.216.118:3000/postfeedback", False)
			   $oHTTP.SetRequestHeader("Content-Type", "application/x-www-form-urlencoded")
			   ; Performing the Request
			   $oHTTP.Send($sPD)

			   ; Download the body response if any, and get the server status response code.
			   $oReceived = $oHTTP.ResponseText
			   $oStatusCode = $oHTTP.Status
			   Return $oStatusCode
EndFunc



