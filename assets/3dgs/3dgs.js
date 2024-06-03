let cameras = [
    {
        id: 0,
        img_name: "00001",
        width: 1959,
        height: 1090,
        // 相机外参中的平移向量?
        position: [
            -3.0089893469241797, -0.11086489695181866, -3.7527640949141428,
        ],
        // 相机外参的旋转矩阵（正交矩阵），即世界坐标系到相机坐标系的旋转矩阵
        // 第一行是旋转矩阵的第一行...  
        rotation: [
            [0.876134201218856, 0.06925962026449776, 0.47706599800804744],
            [-0.04747421839895102, 0.9972110940209488, -0.057586739349882114],
            [-0.4797239414934443, 0.027805376500959853, 0.8769787916452908],
        ],
        // 相机内参，相机焦距的横纵坐标
        fy: 1164.6601287484507,
        fx: 1159.5880733038064,
    },
    {
        id: 1,
        img_name: "00009",
        width: 1959,
        height: 1090,
        position: [
            -2.5199776022057296, -0.09704735754873686, -3.6247725540304545,
        ],
        rotation: [
            [0.9982731285632193, -0.011928707708098955, -0.05751927260507243],
            [0.0065061360949636325, 0.9955928229282383, -0.09355533724430458],
            [0.058381769258182864, 0.09301955098900708, 0.9939511719154457],
        ],
        fy: 1164.6601287484507,
        fx: 1159.5880733038064,
    },
    {
        id: 2,
        img_name: "00017",
        width: 1959,
        height: 1090,
        position: [
            -0.7737533667465242, -0.3364271945329695, -2.9358969417573753,
        ],
        rotation: [
            [0.9998813418672372, 0.013742375651625236, -0.0069605529394208224],
            [-0.014268370388586709, 0.996512943252834, -0.08220929105659476],
            [0.00580653013657589, 0.08229885200307129, 0.9965907801935302],
        ],
        fy: 1164.6601287484507,
        fx: 1159.5880733038064,
    },
    {
        id: 3,
        img_name: "00025",
        width: 1959,
        height: 1090,
        position: [
            1.2198221749590001, -0.2196687861401182, -2.3183162007028453,
        ],
        rotation: [
            [0.9208648867765482, 0.0012010625395201253, 0.389880004297208],
            [-0.06298204172269357, 0.987319521752825, 0.14571693239364383],
            [-0.3847611242348369, -0.1587410451475895, 0.9092635249821667],
        ],
        fy: 1164.6601287484507,
        fx: 1159.5880733038064,
    },
    {
        id: 4,
        img_name: "00033",
        width: 1959,
        height: 1090,
        position: [
            1.742387858893817, -0.13848225198886954, -2.0566370113193146,
        ],
        rotation: [
            [0.24669889292141334, -0.08370189346592856, -0.9654706879349405],
            [0.11343747891376445, 0.9919082664242816, -0.05700815184573074],
            [0.9624300466054861, -0.09545671285663988, 0.2541976029815521],
        ],
        fy: 1164.6601287484507,
        fx: 1159.5880733038064,
    },
    {
        id: 5,
        img_name: "00041",
        width: 1959,
        height: 1090,
        position: [
            3.6567309419223935, -0.16470990600750707, -1.3458085590422042,
        ],
        rotation: [
            [0.2341293058324528, -0.02968330457755884, -0.9717522161434825],
            [0.10270823606832301, 0.99469554638321, -0.005638106875665722],
            [0.9667649592295676, -0.09848690996657204, 0.2359360976431732],
        ],
        fy: 1164.6601287484507,
        fx: 1159.5880733038064,
    },
    {
        id: 6,
        img_name: "00049",
        width: 1959,
        height: 1090,
        position: [
            3.9013554243203497, -0.2597500978038105, -0.8106154188297828,
        ],
        rotation: [
            [0.6717235545638952, -0.015718162115524837, -0.7406351366386528],
            [0.055627354673906296, 0.9980224478387622, 0.029270992841185218],
            [0.7387104058127439, -0.060861588786650656, 0.6712695459756353],
        ],
        fy: 1164.6601287484507,
        fx: 1159.5880733038064,
    },
    {
        id: 7,
        img_name: "00057",
        width: 1959,
        height: 1090,
        position: [4.742994605467533, -0.05591660945412069, 0.9500365976084458],
        rotation: [
            [-0.17042655709210375, 0.01207080756938, -0.9852964448542146],
            [0.1165090336695526, 0.9931575292530063, -0.00798543433078162],
            [0.9784581921120181, -0.1161568667478904, -0.1706667764862097],
        ],
        fy: 1164.6601287484507,
        fx: 1159.5880733038064,
    },
    {
        id: 8,
        img_name: "00065",
        width: 1959,
        height: 1090,
        position: [4.34676307626522, 0.08168160516967145, 1.0876221470355405],
        rotation: [
            [-0.003575447631888379, -0.044792503246552894, -0.9989899137764799],
            [0.10770152645126597, 0.9931680875192705, -0.04491693593046672],
            [0.9941768441149182, -0.10775333677534978, 0.0012732004866391048],
        ],
        fy: 1164.6601287484507,
        fx: 1159.5880733038064,
    },
    {
        id: 9,
        img_name: "00073",
        width: 1959,
        height: 1090,
        position: [3.264984351114202, 0.078974937336732, 1.0117200284114904],
        rotation: [
            [-0.026919994628162257, -0.1565891128261527, -0.9872968974090509],
            [0.08444552208239385, 0.983768234577625, -0.1583319754069128],
            [0.9960643893290491, -0.0876350978794554, -0.013259786205163005],
        ],
        fy: 1164.6601287484507,
        fx: 1159.5880733038064,
    },
];

class interval {
    constructor(min, max) {
        this.min = min;
        this.max = max;
    }
}

class aabb {
    // aabb的两个对角顶点
    constructor(...vertices) {
        if (vertices.length === 0) {
            this.x = new interval(-0, 0);
            this.y = new interval(-0, 0);
            this.z = new interval(-0, 0);
        }else{
            // 初始化最小和最大值为第一个顶点的值
            let minX = vertices[0][0], maxX = vertices[0][0];
            let minY = vertices[0][1], maxY = vertices[0][1];
            let minZ = vertices[0][2], maxZ = vertices[0][2];

            // 遍历所有顶点，更新最小和最大值
            for (let i = 1; i < vertices.length; i++) {
                const [x, y, z] = vertices[i];
                if (x < minX) minX = x;
                if (x > maxX) maxX = x;
                if (y < minY) minY = y;
                if (y > maxY) maxY = y;
                if (z < minZ) minZ = z;
                if (z > maxZ) maxZ = z;
            }

            // 使用计算出的最小和最大值来定义边界框
            this.x = new interval(minX, maxX);
            this.y = new interval(minY, maxY);
            this.z = new interval(minZ, maxZ);
        }

        
    }

    contain(point) {
        let result = false;
        result = 
            point[0] > this.x.min &&
            point[0] < this.x.max &&
            point[1] > this.y.min &&
            point[1] < this.y.max &&
            point[2] > this.z.min &&
            point[2] < this.z.max;  
        return result;
    }
}

let scenes = [
    {
        id: 0,
        name: "rocket_0531",
        channels: [
            new aabb([2.537346324637178, -0.10118144830966763, 0.3981652685281632], [3.0397060958098625, 0.20118144830966909, -0.35183342445764154]),
            new aabb([0.6680398896600114, -0.10118144830962526, -1.5610838731491932], [0.5826907533413165, 0.20118144830962672, -2.461063877483228]),
            new aabb([-0.7195468257119202, -0.10118144830966885, -2.5387312629241015], [-1.3964021012550945, 0.20118144830967644, -3.6864954469465605]),
        ],
        associatedScenes: [ 
            [4, 0],  // 第一个aabb关联场景1的视角0
            [2, 0],
            [5, 0],
        ],
        defaultViewMatrix: [
            // 0初始视角
            [
            -0.07754421539883889,
            -0.053977291009446184,
            0.9939684837627364,
            0,
            -0.009533457492564618,
            0.9945109850559415,
            0.05879637566566251,
            0,
            -1.0002394835056232,
            -0.007404384011151063,
            -0.08286223949287697,
            0,
            0.24394782877545493,
            -0.24566157914223152,
            2.764795931640756,
            0.9999999999999597
            ],
            // 1综合楼->火箭广场
            [
                -0.28311241550538785,
                0.2814062711860257,
                -0.9151818784941391,
                0,
                -0.015881558404478646,
                0.9524776558423046,
                0.2917774686708789,
                0,
                0.9636657155276325,
                0.09420859923708486,
                -0.2643352578569933,
                0,
                0.2566522526274988,
                -0.6041660510771144,
                1.6117453012290561,
                0.9999999999999656
            ],
            // 2图书馆->火箭广场
            [
                0.8627768153326305,
                -0.0966827670498462,
                0.493121292868729,
                0,
                -0.005661920187114832,
                0.9734766997478339,
                0.21192229167376223,
                0,
                -0.5088134399897363,
                -0.18950236058666312,
                0.8441550441818506,
                0,
                -0.27769641435755243,
                -0.5233473060130592,
                1.9190668221819025,
                0.9999999999999655
            ],
            // 3花园->火箭广场
            [
                0.7989754880022196,
                0.1978060804581435,
                -0.5651645106566686,
                0,
                -0.008953736352500902,
                0.9470919527279976,
                0.3090900575620331,
                0,
                0.5982767841239333,
                -0.24749408757124805,
                0.7669495199785592,
                0,
                0.037149044902586595,
                -0.5460491139461643,
                1.3245132142793081,
                0.9999999999999655
            ],
        ],
        fov: +Infinity,
        worldY: [0.00, 1.00, 0.00],
        border: [
            new aabb([0.17839915702146159, -0.10118144830966959, 5.927712910010191], [-6.819092845535139, 0.20118144830966085, 2.459526487944815]),
            new aabb([1.0616179109178039, -0.10118144830967919, 3.855088015143263], [2.9468371862784943, 0.20118144830969124, 0.9440714315348531]),
            new aabb([-1.8683586868040019, -0.10118144830967374, -2.4751128815263708], [-4.97799393648022, 0.20118144830967939, -0.4584046878351077]),
        ],
    },
    {
        id: 1,
        name: "second_floor",
        channels: [
            new aabb([-0.1995755645346779, -0.19001826477059897, -3.1607320945997364], [-3.058881764583237, 0.29001826477060324, -2.3177831852002706]),
        ],
        associatedScenes: [
            [4, 2],
        ],
        defaultViewMatrix: [
            [0.8945,  0.0741, 0.4447, 0, 
            -0.1245,  0.9885, 0.0857, 0, 
           -0.4333,  -0.1320, 0.8934, 0, 
            -0.0753, -0.3691, 1.9313, 1],
        ],
        fov: +Infinity,
        worldY: [0.05132922020846374, 0.9860132784452637, -0.1587612988510208],
        border: [
            new aabb([-1.6876152254276136, 0.09001826477059314, 2.7922352104343315], [3.1928601714313056, 0.29001826477059444, 0.23203742471886726]),
            new aabb([2.3638400816305625, 0.09001826477059805, -0.11661498269399116], [0.9245792031999677, 0.29001826477060532, -3.2653965725263663]),
            new aabb([-2.568130925016142, 0.09001826477059455, -0.5346445222812857], [-1.28071187277507, 0.29001826477059525, 0.22984829651617608]),
        ],
    },
    {
        id: 2,
        name: "garden",
        channels: [
            new aabb([-1.0396979829172837, -0.7749018196559539, 1.638779498325338], [-1.1739202282573038, 0.6749018196559571, 2.9755189000468034]),
            new aabb([3.6930058405663866, -0.7749018196560306, 2.8530012031146468], [6.237011950656852, 0.674901819656034, 1.596846756947201]),
            new aabb([-0.8977362196089346, -0.7749018196559848, -1.8897190086940594], [-2.524814716117395, 0.6749018196559873, -0.6139724769295936]),
        ],
        associatedScenes: [ 
            [0, 3],  // 花园->火箭广场
            [4, 1],  // 花园->综合楼
            [3, 0],
        ],
        defaultViewMatrix: [
            // 火箭广场->花园
            [
                -0.8181677602984467,
                -0.2776586395368866,
                0.5068601344547427,
                0,
                0.03939288121769935,
                0.8481891381019311,
                0.528226643511946,
                0,
                -0.5765799517858692,
                0.4521446909225594,
                -0.6830232336237521,
                0,
                0.9346485316086501,
                -0.17187948871685804,
                1.4839645937793122,
                1.0000000000000162
            ],
            // 综合楼->花园
            [
                0.04771812713178766,
                0.5814415818681817,
                -0.8142780036439572,
                0,
                0.039392881217814396,
                0.8120963118767438,
                0.582192220100984,
                0,
                0.999782929008178,
                -0.059857879049705756,
                0.01584705588375708,
                0,
                -0.6164154098036326,
                -1.3764777277733062,
                3.120991009576334,
                1.0000000000000155
            ],
        ],
        fov: 10,
        worldY: [0.00, 1.00, 0.00],
        border: [new aabb()],
    },
    {
        id: 3,
        name: "library",
        channels: [
            new aabb([1.186514256911991, -0.22794907030814515, 0.031565234224204965],[-0.009620081931820028, 0.32794907030814632, 0.5508195583173878]),
        ],
        associatedScenes: [ 
            [5, 0],  // 第一个aabb关联场景1的视角0
            // [1, 1],  // 第二个aabb关联场景1的视角1
        ],
        defaultViewMatrix: [
            [
                -0.519309570485847,
                0.07214253983192485,
                -0.8535297440328257,
                0,
                -0.05487904960705009,
                0.9915906744220827,
                0.11720163955140461,
                0,
                0.8548073584744896,
                0.10770483425953793,
                -0.5109834132096449,
                0,
                0.2642619885741879,
                -0.45172691987786046,
                2.000668066639436,
                1.0000000000000144
            ],
        ],
        fov: +Infinity,
        worldY: [0.00, 1.00, 0.00],
        border: [new aabb()],
    },
    {
        id: 4,
        name: "zonghelou",
        channels: [
            new aabb([1.009114227164571, -0.5615491016751014, -2.4944657695929973],[-0.11038605000018471, 0.6615491016751079, -2.794085139842393]),
            new aabb([-3.548818276544901, -0.5615491016750983, -1.9380939236198806], [-5.231668820384473, 0.6615491016750982, -0.9945347844292828]),
            new aabb([0.20349195994843425, -0.5615491016751045, 1.3165625771546077], [1.4339468696441584, 0.6615491016751121, 1.7769487511686932]),
        ],
        associatedScenes: [ 
            [2, 1],  
            [0, 1], 
            [1, 0],
        ],
        defaultViewMatrix: [
            // 0火箭广场->综合楼
            [
                0.7028955902530766,
                0.19821235663212836,
                0.6808448067520735,
                0,
                -0.005992260274729724,
                0.960300659200047,
                -0.26530498818720394,
                0,
                -0.7158321577160501,
                0.18058194569069144,
                0.6799812371456055,
                0,
                1.2310026097049611,
                0.26072287014779305,
                2.967682668184018,
                0.999999999999966
            ],
            // 1花园->综合楼
            [
                0.9697227562658282,
                0.078186672882572,
                0.22455426997477618,
                0,
                -0.005779149744948944,
                0.9551965418459956,
                -0.28313630617435975,
                0,
                -0.24300944764898733,
                0.27280506093261164,
                0.9348389203936913,
                0,
                -0.11350823663707237,
                0.011328684440316268,
                2.02040961825285,
                0.9999999999999653
            ],
            // 2综合楼内->综合楼外
            [
                -0.9463128426867848,
                -0.07739858819836608,
                -0.30887127142404347,
                0,
                -0.017833826041580656,
                0.9743208214117209,
                -0.20731833400015676,
                0,
                0.3240478141070701,
                -0.19468084351617151,
                -0.9297808254315512,
                0,
                0.21149441442929282,
                -0.466034765327082,
                0.4846988256294796,
                0.9999999999999653
            ]

      ],
        fov: +Infinity,
        worldY: [0.00, 1.00, 0.00],
        border: [
            new aabb([2.1697068892070366, 0.4615491016750901, 0.47820585463208615], [1.3542952491538576, 0.6615491016750841, -2.966248016706144]),
            new aabb([-2.19993818709408, 0.4615491016750944, 2.4754937895762006], [-3.401961099939262, 0.6615491016750943, -0.0949106941011335]),
        ],
    },
    {
        id: 5,
        name: "xinxilou",
        channels: [
            // new aabb([3.438705906330674, 0.22794907030814787, 1.4823324261359543],[2.371667415730209, 0.2279490703081443, 2.609858860813532]),
        ],
        associatedScenes: [ 
            // [2, 1],  // 第一个aabb关联场景1的视角0
            // [1, 1],  // 第二个aabb关联场景1的视角1
        ],
        defaultViewMatrix: [
            [
                -0.24411383573392742,
                -0.13671269002821151,
                0.9584456560435597,
                0,
                -0.059435846023291196,
                0.9858240987667656,
                0.13121823996088017,
                0,
                -0.9702241851110093,
                -0.027214283276500145,
                -0.25558641085028033,
                0,
                -0.04994575330711027,
                -0.12607629166487186,
                0.6829079531275851,
                0.9999999999999658
            ],
        ],
        fov: +Infinity,
        worldY: [0, 1, 0],
        border: [
            // new aabb([1.6143711798261633 0.4615491016750913 0.38827516154586106], [2.1182872896053273, 0.6615491016750991, -2.756316588881929])
        ],
    },

]

let camera = cameras[0];  // 相机
let currentScene = "rocket_0531";
let currentSceneId = scenes.findIndex(scene => scene.name === currentScene);;
let sceneViewId = 0;  // 当前场景的视角id
let viewMatrix = scenes[currentSceneId].defaultViewMatrix[sceneViewId];  // w2c矩阵
let camUp = [viewMatrix[1], viewMatrix[5], viewMatrix[9]];  // 相机上方向
let worldY = scenes[currentSceneId].worldY;

let transitionsFlag = false;
let defaultViewMatrix = 
    [0.47,  0.04, 0.88, 0, 
    -0.11,  0.99, 0.02, 0, 
    -0.88, -0.11, 0.47, 0, 
     0.07,  0.03, 6.55, 1];
    //     [0.53,  0.00, 0.85, 0, 
    //     0.00,  1.00, 0.00, 0, 
    //    -0.85,  0.00, 0.53, 0, 
    //     0.01, -0.19, 3.45, 1],


function getProjectionMatrix(fx, fy, width, height) {
    const znear = 0.2;
    const zfar = 200;
    return [
        [(2 * fx) / width, 0, 0, 0],
        [0, -(2 * fy) / height, 0, 0],
        [0, 0, zfar / (zfar - znear), 1],
        [0, 0, -(zfar * znear) / (zfar - znear), 0],
    ].flat();
}

function getViewMatrix(camera) {
    const R = camera.rotation.flat();
    const t = camera.position;
    // 根据w2c矩阵到c2w矩阵的转换公式来计算得到c2w矩阵
    // 第一行是c2w矩阵的第一列...
    const camToWorld = [
        [R[0], R[1], R[2], 0],
        [R[3], R[4], R[5], 0],
        [R[6], R[7], R[8], 0],
        // 相机原点在世界坐标系中的位置
        [
            -t[0] * R[0] - t[1] * R[3] - t[2] * R[6],
            -t[0] * R[1] - t[1] * R[4] - t[2] * R[7],
            -t[0] * R[2] - t[1] * R[5] - t[2] * R[8],
            1,
        ],
    ].flat();
    return camToWorld;
}
// function translate4(a, x, y, z) {
//     return [
//         ...a.slice(0, 12),
//         a[0] * x + a[4] * y + a[8] * z + a[12],
//         a[1] * x + a[5] * y + a[9] * z + a[13],
//         a[2] * x + a[6] * y + a[10] * z + a[14],
//         a[3] * x + a[7] * y + a[11] * z + a[15],
//     ];
// }

function multiply4(a, b) {
    return [
        b[0] * a[0] + b[1] * a[4] + b[2] * a[8] + b[3] * a[12],
        b[0] * a[1] + b[1] * a[5] + b[2] * a[9] + b[3] * a[13],
        b[0] * a[2] + b[1] * a[6] + b[2] * a[10] + b[3] * a[14],
        b[0] * a[3] + b[1] * a[7] + b[2] * a[11] + b[3] * a[15],
        b[4] * a[0] + b[5] * a[4] + b[6] * a[8] + b[7] * a[12],
        b[4] * a[1] + b[5] * a[5] + b[6] * a[9] + b[7] * a[13],
        b[4] * a[2] + b[5] * a[6] + b[6] * a[10] + b[7] * a[14],
        b[4] * a[3] + b[5] * a[7] + b[6] * a[11] + b[7] * a[15],
        b[8] * a[0] + b[9] * a[4] + b[10] * a[8] + b[11] * a[12],
        b[8] * a[1] + b[9] * a[5] + b[10] * a[9] + b[11] * a[13],
        b[8] * a[2] + b[9] * a[6] + b[10] * a[10] + b[11] * a[14],
        b[8] * a[3] + b[9] * a[7] + b[10] * a[11] + b[11] * a[15],
        b[12] * a[0] + b[13] * a[4] + b[14] * a[8] + b[15] * a[12],
        b[12] * a[1] + b[13] * a[5] + b[14] * a[9] + b[15] * a[13],
        b[12] * a[2] + b[13] * a[6] + b[14] * a[10] + b[15] * a[14],
        b[12] * a[3] + b[13] * a[7] + b[14] * a[11] + b[15] * a[15],
    ];
}

function invert4(a) {
    let b00 = a[0] * a[5] - a[1] * a[4];
    let b01 = a[0] * a[6] - a[2] * a[4];
    let b02 = a[0] * a[7] - a[3] * a[4];
    let b03 = a[1] * a[6] - a[2] * a[5];
    let b04 = a[1] * a[7] - a[3] * a[5];
    let b05 = a[2] * a[7] - a[3] * a[6];
    let b06 = a[8] * a[13] - a[9] * a[12];
    let b07 = a[8] * a[14] - a[10] * a[12];
    let b08 = a[8] * a[15] - a[11] * a[12];
    let b09 = a[9] * a[14] - a[10] * a[13];
    let b10 = a[9] * a[15] - a[11] * a[13];
    let b11 = a[10] * a[15] - a[11] * a[14];
    let det =
        b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    if (!det) return null;
    return [
        (a[5] * b11 - a[6] * b10 + a[7] * b09) / det,
        (a[2] * b10 - a[1] * b11 - a[3] * b09) / det,
        (a[13] * b05 - a[14] * b04 + a[15] * b03) / det,
        (a[10] * b04 - a[9] * b05 - a[11] * b03) / det,
        (a[6] * b08 - a[4] * b11 - a[7] * b07) / det,
        (a[0] * b11 - a[2] * b08 + a[3] * b07) / det,
        (a[14] * b02 - a[12] * b05 - a[15] * b01) / det,
        (a[8] * b05 - a[10] * b02 + a[11] * b01) / det,
        (a[4] * b10 - a[5] * b08 + a[7] * b06) / det,
        (a[1] * b08 - a[0] * b10 - a[3] * b06) / det,
        (a[12] * b04 - a[13] * b02 + a[15] * b00) / det,
        (a[9] * b02 - a[8] * b04 - a[11] * b00) / det,
        (a[5] * b07 - a[4] * b09 - a[6] * b06) / det,
        (a[0] * b09 - a[1] * b07 + a[2] * b06) / det,
        (a[13] * b01 - a[12] * b03 - a[14] * b00) / det,
        (a[8] * b03 - a[9] * b01 + a[10] * b00) / det,
    ];
}

function rotate4(a, rad, x, y, z) {
    let len = Math.hypot(x, y, z);
    x /= len;
    y /= len;
    z /= len;
    let s = Math.sin(rad);
    let c = Math.cos(rad);
    let t = 1 - c;
    let b00 = x * x * t + c;
    let b01 = y * x * t + z * s;
    let b02 = z * x * t - y * s;
    let b10 = x * y * t - z * s;
    let b11 = y * y * t + c;
    let b12 = z * y * t + x * s;
    let b20 = x * z * t + y * s;
    let b21 = y * z * t - x * s;
    let b22 = z * z * t + c;
    return [
        a[0] * b00 + a[4] * b01 + a[8] * b02,
        a[1] * b00 + a[5] * b01 + a[9] * b02,
        a[2] * b00 + a[6] * b01 + a[10] * b02,
        a[3] * b00 + a[7] * b01 + a[11] * b02,
        a[0] * b10 + a[4] * b11 + a[8] * b12,
        a[1] * b10 + a[5] * b11 + a[9] * b12,
        a[2] * b10 + a[6] * b11 + a[10] * b12,
        a[3] * b10 + a[7] * b11 + a[11] * b12,
        a[0] * b20 + a[4] * b21 + a[8] * b22,
        a[1] * b20 + a[5] * b21 + a[9] * b22,
        a[2] * b20 + a[6] * b21 + a[10] * b22,
        a[3] * b20 + a[7] * b21 + a[11] * b22,
        ...a.slice(12, 16),
    ];
}

function rotate4_y(inv, rad) {
    let rotationAxis = [inv[0]*worldY[0] + inv[1]*worldY[1] + inv[2]*worldY[2],
                        inv[4]*worldY[0] + inv[5]*worldY[1] + inv[6]*worldY[2],
                        inv[8]*worldY[0] + inv[9]*worldY[1] + inv[10]*worldY[2]];

    return rotate4(inv, rad, rotationAxis[0], rotationAxis[1], rotationAxis[2]);
}

function translate4(a, x, y, z) {
    return [
        ...a.slice(0, 12),
        a[0] * x + a[4] * y + a[8] * z + a[12],
        a[1] * x + a[5] * y + a[9] * z + a[13],
        a[2] * x + a[6] * y + a[10] * z + a[14],
        a[3] * x + a[7] * y + a[11] * z + a[15],
    ];
}

function translate4_2(a, x, y, z) {
    return [
        ...a.slice(0, 12),
        x + a[12],
        y + a[13],
        z + a[14],
        a[15],
    ];
}

// 把一个向量投影到一个平面上
function projectVectorOntoPlaneAndNormalize(v, n) {
    // Helper function to compute dot product of two vectors
    const dotProduct = (v1, v2) => v1[0] * v2[0] + v1[1] * v2[1] + v1[2] * v2[2];

    // Helper function to subtract two vectors
    const vectorSubtract = (v1, v2) => [v1[0] - v2[0], v1[1] - v2[1], v1[2] - v2[2]];

    // Helper function to scale a vector by a scalar
    const vectorScale = (v, scalar) => [v[0] * scalar, v[1] * scalar, v[2] * scalar];

    // Helper function to compute the length (norm) of a vector
    const vectorLength = v => Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);

    // Helper function to normalize a vector
    const normalize = v => {
        const length = vectorLength(v);
        return length === 0 ? [0, 0, 0] : [v[0] / length, v[1] / length, v[2] / length];
    };

    // Ensure the normal vector is normalized
    const normalizedN = normalize(n);
    
    // Calculate the projection of v onto the plane defined by n
    const dot = dotProduct(v, normalizedN);
    const projection = vectorSubtract(v, vectorScale(normalizedN, dot));
    
    // Normalize the projection vector
    return normalize(projection);
}

// 计算向量和平面之间的夹角
function vectorPlaneAngle(vector, normal) {
     // 计算向量的长度
     function magnitude(v) {
        return Math.sqrt(v[0] ** 2 + v[1] ** 2 + v[2] ** 2);
    }

    // 计算两个向量的点积
    function dotProduct(v1, v2) {
        return v1[0] * v2[0] + v1[1] * v2[1] + v1[2] * v2[2];
    }

    // 计算向量和法线之间的夹角（弧度）
    const dot = dotProduct(vector, normal);
    const magVector = magnitude(vector);
    const magNormal = magnitude(normal);
    const cosTheta = dot / (magVector * magNormal);
    const angleRad = Math.acos(cosTheta);

    // 将弧度转换为度
    const angleDeg = angleRad * (180 / Math.PI);

    // 计算向量和平面之间的夹角
    const angleBetween = 90 - angleDeg;

    // 确保夹角在0-90度之间
    return -angleBetween;
}


function createWorker(self) {
    let buffer;
    let vertexCount = 0;
    let viewProj;
    // 6*4 + 4 + 4 = 8*4
    // XYZ - Position (Float32)
    // XYZ - Scale (Float32)
    // RGBA - colors (uint8)
    // IJKL - quaternion/rot (uint8)
    const rowLength = 3 * 4 + 3 * 4 + 4 + 4;
    let lastProj = [];
    let depthIndex = new Uint32Array();
    let lastVertexCount = 0;

    var _floatView = new Float32Array(1);
    var _int32View = new Int32Array(_floatView.buffer);

    function floatToHalf(float) {
        _floatView[0] = float;
        var f = _int32View[0];

        var sign = (f >> 31) & 0x0001;
        var exp = (f >> 23) & 0x00ff;
        var frac = f & 0x007fffff;

        var newExp;
        if (exp == 0) {
            newExp = 0;
        } else if (exp < 113) {
            newExp = 0;
            frac |= 0x00800000;
            frac = frac >> (113 - exp);
            if (frac & 0x01000000) {
                newExp = 1;
                frac = 0;
            }
        } else if (exp < 142) {
            newExp = exp - 112;
        } else {
            newExp = 31;
            frac = 0;
        }

        return (sign << 15) | (newExp << 10) | (frac >> 13);
    }

    function packHalf2x16(x, y) {
        return (floatToHalf(x) | (floatToHalf(y) << 16)) >>> 0;
    }

    // 将buffer数据转换为纹理数据
    // buffer中一个顶点的数据构成
    // buffer中的数据构成
    // |position|scale|color|quaternion|
    // |   3*4  | 3*4 | 4*1 |   4*1    |
    function generateTexture() {
        if (!buffer) return;
        const f_buffer = new Float32Array(buffer);  // 将buffer中的数据按照4字节（32位）一个元素划分转换为float数组
        const u_buffer = new Uint8Array(buffer);    // 将buffer中的数据按照1字节（8位）一个元素划分转换为float数组

        var texwidth = 1024 * 2; // Set to your desired width
        var texheight = Math.ceil((2 * vertexCount) / texwidth); // Set to your desired height
        var texdata = new Uint32Array(texwidth * texheight * 4); // 4 components per pixel (RGBA)  // texwidth*texheight*4 = 8*vertexCount，一个像素有8个32位（4字节）的数据，也就是一个像素有32字节的数据
        var texdata_f = new Float32Array(texdata.buffer);
        var texdata_c = new Uint8Array(texdata.buffer);
        // texdata中的一组数据
        // |x|y|z|空|sigma|sigma|sigma|rgba|
        // |4|4|4|4 |  4  |  4  |  4  |  4 |

        // Here we convert from a .splat file buffer into a texture
        // With a little bit more foresight perhaps this texture file
        // should have been the native format as it'd be very easy to
        // load it into webgl.
        for (let i = 0; i < vertexCount; i++) {
            // x, y, z
            texdata_f[8 * i + 0] = f_buffer[8 * i + 0];
            texdata_f[8 * i + 1] = f_buffer[8 * i + 1];
            texdata_f[8 * i + 2] = f_buffer[8 * i + 2];

            // r, g, b, a
            texdata_c[4 * (8 * i + 7) + 0] = u_buffer[32 * i + 24 + 0];
            texdata_c[4 * (8 * i + 7) + 1] = u_buffer[32 * i + 24 + 1];
            texdata_c[4 * (8 * i + 7) + 2] = u_buffer[32 * i + 24 + 2];
            texdata_c[4 * (8 * i + 7) + 3] = u_buffer[32 * i + 24 + 3];

            // quaternions
            let scale = [
                f_buffer[8 * i + 3 + 0],
                f_buffer[8 * i + 3 + 1],
                f_buffer[8 * i + 3 + 2],
            ];
            let rot = [
                (u_buffer[32 * i + 28 + 0] - 128) / 128,
                (u_buffer[32 * i + 28 + 1] - 128) / 128,
                (u_buffer[32 * i + 28 + 2] - 128) / 128,
                (u_buffer[32 * i + 28 + 3] - 128) / 128,
            ];

            // Compute the matrix product of S and R (M = S * R)
            const M = [
                1.0 - 2.0 * (rot[2] * rot[2] + rot[3] * rot[3]),
                2.0 * (rot[1] * rot[2] + rot[0] * rot[3]),
                2.0 * (rot[1] * rot[3] - rot[0] * rot[2]),

                2.0 * (rot[1] * rot[2] - rot[0] * rot[3]),
                1.0 - 2.0 * (rot[1] * rot[1] + rot[3] * rot[3]),
                2.0 * (rot[2] * rot[3] + rot[0] * rot[1]),

                2.0 * (rot[1] * rot[3] + rot[0] * rot[2]),
                2.0 * (rot[2] * rot[3] - rot[0] * rot[1]),
                1.0 - 2.0 * (rot[1] * rot[1] + rot[2] * rot[2]),
            ].map((k, i) => k * scale[Math.floor(i / 3)]);

            const sigma = [
                M[0] * M[0] + M[3] * M[3] + M[6] * M[6],
                M[0] * M[1] + M[3] * M[4] + M[6] * M[7],
                M[0] * M[2] + M[3] * M[5] + M[6] * M[8],
                M[1] * M[1] + M[4] * M[4] + M[7] * M[7],
                M[1] * M[2] + M[4] * M[5] + M[7] * M[8],
                M[2] * M[2] + M[5] * M[5] + M[8] * M[8],
            ];
            // 压缩数据
            texdata[8 * i + 4] = packHalf2x16(4 * sigma[0], 4 * sigma[1]);
            texdata[8 * i + 5] = packHalf2x16(4 * sigma[2], 4 * sigma[3]);
            texdata[8 * i + 6] = packHalf2x16(4 * sigma[4], 4 * sigma[5]);
        }

        self.postMessage({ texdata, texwidth, texheight }, [texdata.buffer]);   
    }

    function runSort(viewProj) {
        if (!buffer) return;
        let length = buffer.byteLength;
        if (length % 4 !== 0) {
            length = length + (4 - length % 4); // make length a multiple of 4
        }
        const newBuffer = new ArrayBuffer(length);
        new Uint8Array(newBuffer).set(new Uint8Array(buffer)); // copy old buffer into new one
        const f_buffer = new Float32Array(newBuffer);
        // rest of the code...
        if (lastVertexCount == vertexCount) {
            // console.log("same buffer");
            let dot =
                lastProj[2] * viewProj[2] +
                lastProj[6] * viewProj[6] +
                lastProj[10] * viewProj[10];
            if (Math.abs(dot - 1) < 0.01) {
                return;
            }
        } else {
            // console.log("new buffer");
            generateTexture();  // 生成纹理数据
            lastVertexCount = vertexCount;
        }

        // console.time("sort");
        let maxDepth = -Infinity;
        let minDepth = Infinity;
        let sizeList = new Int32Array(vertexCount);
        for (let i = 0; i < vertexCount; i++) {
            // 得到每个点的深度值
            let depth =
                ((viewProj[2] * f_buffer[8 * i + 0] +
                    viewProj[6] * f_buffer[8 * i + 1] +
                    viewProj[10] * f_buffer[8 * i + 2]) *
                    4096) |
                0;
            sizeList[i] = depth;  // 记录每个点的深度值
            if (depth > maxDepth) maxDepth = depth;  // 记录所有点的最大深度值
            if (depth < minDepth) minDepth = depth;  // 记录所有点的最小深度值
        }

        // This is a 16 bit single-pass counting sort
        // 根据深度值进行排序
        let depthInv = (256 * 256) / (maxDepth - minDepth);
        let counts0 = new Uint32Array(256 * 256);
        for (let i = 0; i < vertexCount; i++) {
            sizeList[i] = ((sizeList[i] - minDepth) * depthInv) | 0;  // 将深度值映射到0-256*256-1之间
            counts0[sizeList[i]]++;  // 存储每个深度值出现的次数
        }
        let starts0 = new Uint32Array(256 * 256);
        for (let i = 1; i < 256 * 256; i++)
            starts0[i] = starts0[i - 1] + counts0[i - 1];
        depthIndex = new Uint32Array(vertexCount);  // 存储按深度值排序后的顶点索引
        for (let i = 0; i < vertexCount; i++)
            depthIndex[starts0[sizeList[i]]++] = i;

        // console.timeEnd("sort");

        lastProj = viewProj;
        self.postMessage({ depthIndex, viewProj, vertexCount }, [
            depthIndex.buffer,
        ]);
    }

    // 解析ply文件并得到buffer数据
    function processPlyBuffer(inputBuffer) {
        const ubuf = new Uint8Array(inputBuffer);
        // 10KB ought to be enough for a header...
        const header = new TextDecoder().decode(ubuf.slice(0, 1024 * 10));
        const header_end = "end_header\n";
        const header_end_index = header.indexOf(header_end);
        if (header_end_index < 0)
            throw new Error("Unable to read .ply file header");
        console.log("Header", header.slice(0, header_end_index));  // 打印ply文件的header
        const vertexCount = parseInt(/element vertex (\d+)\n/.exec(header)[1]);
        console.log("Vertex Count", vertexCount);
        let row_offset = 0,
            offsets = {},
            types = {};
        const TYPE_MAP = {
            double: "getFloat64",
            int: "getInt32",
            uint: "getUint32",
            float: "getFloat32",
            short: "getInt16",
            ushort: "getUint16",
            uchar: "getUint8",
        };
        for (let prop of header
            .slice(0, header_end_index)
            .split("\n")
            .filter((k) => k.startsWith("property "))) {
            const [p, type, name] = prop.split(" ");
            const arrayType = TYPE_MAP[type] || "getInt8";
            types[name] = arrayType;
            offsets[name] = row_offset;
            row_offset += parseInt(arrayType.replace(/[^\d]/g, "")) / 8;
        }
        console.log("Bytes per row", row_offset, types, offsets);  // 每个顶点有62个属性，每个属性值占4个字节(32位)

        let dataView = new DataView(
            inputBuffer,
            header_end_index + header_end.length,  // ply文件中header之后的顶点属性数据
        );
        let row = 0;
        const attrs = new Proxy(
            {},
            {
                get(target, prop) {
                    if (!types[prop]) throw new Error(prop + " not found");
                    return dataView[types[prop]](
                        row * row_offset + offsets[prop],
                        true,
                    );
                },
            },
        );

        console.time("calculate importance");
        let sizeList = new Float32Array(vertexCount);
        let sizeIndex = new Uint32Array(vertexCount);
        for (row = 0; row < vertexCount; row++) {
            sizeIndex[row] = row;
            if (!types["scale_0"]) continue;
            const size =
                Math.exp(attrs.scale_0) *
                Math.exp(attrs.scale_1) *
                Math.exp(attrs.scale_2);
            const opacity = 1 / (1 + Math.exp(-attrs.opacity));  // 不透明度
            sizeList[row] = size * opacity;  // 得到每个顶点的size
        }
        console.timeEnd("calculate importance");  // 和console.time("calculate importance")一起使用，计算两者之间的代码的运行时间

        console.time("sort");
        sizeIndex.sort((b, a) => sizeList[a] - sizeList[b]);  // 根据设定的条件对所有顶点的索引进行排序，顶点size大的排在前面
        console.timeEnd("sort");

        // buffer中包含的属性：点的位置、缩放系数、颜色（通过球谐函数计算得到）、旋转系数（四元数）
        // 6*4 + 4 + 4 = 8*4
        // XYZ - Position (Float32) 4字节*3
        // XYZ - Scale (Float32) 4字节*3
        // RGBA - colors (uint8) 1字节*4
        // IJKL - quaternion/rot (uint8) 1字节*4
        const rowLength = 3 * 4 + 3 * 4 + 4 + 4;  // 以上属性值一共32字节
        const buffer = new ArrayBuffer(rowLength * vertexCount);

        console.time("build buffer");
        for (let j = 0; j < vertexCount; j++) {
            row = sizeIndex[j];  // 从size最大的顶点开始取

            const position = new Float32Array(buffer, j * rowLength, 3);  // 创建一个指向buffer中特定位置的Float32Array的指针，position是一个Float32Array对象，它包含了buffer中从j * rowLength开始的3个浮点数
            const scales = new Float32Array(buffer, j * rowLength + 4 * 3, 3);
            const rgba = new Uint8ClampedArray(  //  Uint8ClampedArray 与普通的 Uint8Array 类似，但是它的值不会超过 0 到 255 的范围
                buffer,
                j * rowLength + 4 * 3 + 4 * 3,
                4,
            );
            const rot = new Uint8ClampedArray(
                buffer,
                j * rowLength + 4 * 3 + 4 * 3 + 4,
                4,
            );

            if (types["scale_0"]) {
                const qlen = Math.sqrt(
                    attrs.rot_0 ** 2 +
                        attrs.rot_1 ** 2 +
                        attrs.rot_2 ** 2 +
                        attrs.rot_3 ** 2,
                );

                rot[0] = (attrs.rot_0 / qlen) * 128 + 128;
                rot[1] = (attrs.rot_1 / qlen) * 128 + 128;
                rot[2] = (attrs.rot_2 / qlen) * 128 + 128;
                rot[3] = (attrs.rot_3 / qlen) * 128 + 128;

                scales[0] = Math.exp(attrs.scale_0);
                scales[1] = Math.exp(attrs.scale_1);
                scales[2] = Math.exp(attrs.scale_2);
            } else {
                scales[0] = 0.01;
                scales[1] = 0.01;
                scales[2] = 0.01;

                rot[0] = 255;
                rot[1] = 0;
                rot[2] = 0;
                rot[3] = 0;
            }

            position[0] = attrs.x;
            position[1] = attrs.y;
            position[2] = attrs.z;

            if (types["f_dc_0"]) {
                const SH_C0 = 0.28209479177387814;
                rgba[0] = (0.5 + SH_C0 * attrs.f_dc_0) * 255;
                rgba[1] = (0.5 + SH_C0 * attrs.f_dc_1) * 255;
                rgba[2] = (0.5 + SH_C0 * attrs.f_dc_2) * 255;
            } else {
                rgba[0] = attrs.red;
                rgba[1] = attrs.green;
                rgba[2] = attrs.blue;
            }
            if (types["opacity"]) {
                rgba[3] = (1 / (1 + Math.exp(-attrs.opacity))) * 255;
            } else {
                rgba[3] = 255;
            }
        }
        console.timeEnd("build buffer");
        return buffer;
    }

    const throttledSort = () => {
        if (!sortRunning) {
            sortRunning = true;
            let lastView = viewProj;
            runSort(lastView);
            setTimeout(() => {  // 在指定的毫秒数（0毫秒）之后执行一个回调函数
                sortRunning = false;
                if (lastView !== viewProj) {
                    throttledSort(); // 当viewProj发生变化时，再次调用runSort函数
                }
            }, 0);
        }
    };

    let sortRunning;
    self.onmessage = (e) => {
        if (e.data.ply) {  // 如果接收到ply文件数据
            vertexCount = 0;
            runSort(viewProj);
            buffer = processPlyBuffer(e.data.ply);
            vertexCount = Math.floor(buffer.byteLength / rowLength);
            postMessage({ buffer: buffer });
        } else if (e.data.buffer) {
            buffer = e.data.buffer;
            vertexCount = e.data.vertexCount;
        } else if (e.data.vertexCount) {
            vertexCount = e.data.vertexCount;
        } else if (e.data.view) {
            viewProj = e.data.view;
            throttledSort();
        }
    };
}

const vertexShaderSource = `
#version 300 es
precision highp float;
precision highp int;

uniform highp usampler2D u_texture;  // 纹理单元的纹理位置：0
uniform mat4 projection, view;       // 投影矩阵，c2w矩阵
uniform vec2 focal;                  // 相机内参，相机焦距的横纵坐标
uniform vec2 viewport;               // 视口大小

in vec2 position;  // triangleVertices = new Float32Array([-2, -2, 2, -2, 2, 2, -2, 2])
in int index;      // depthIndex数据

out vec4 vColor;
out vec2 vPosition;

void main () {
    uvec4 cen = texelFetch(u_texture, ivec2((uint(index) & 0x3ffu) << 1, uint(index) >> 10), 0);
    vec4 cam = view * vec4(uintBitsToFloat(cen.xyz), 1);
    vec4 pos2d = projection * cam;

    float clip = 1.2 * pos2d.w;
    if (pos2d.z < -clip || pos2d.x < -clip || pos2d.x > clip || pos2d.y < -clip || pos2d.y > clip) {
        gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
        return;
    }

    uvec4 cov = texelFetch(u_texture, ivec2(((uint(index) & 0x3ffu) << 1) | 1u, uint(index) >> 10), 0);
    vec2 u1 = unpackHalf2x16(cov.x), u2 = unpackHalf2x16(cov.y), u3 = unpackHalf2x16(cov.z);
    mat3 Vrk = mat3(u1.x, u1.y, u2.x, u1.y, u2.y, u3.x, u2.x, u3.x, u3.y);

    mat3 J = mat3(
        focal.x / cam.z, 0., -(focal.x * cam.x) / (cam.z * cam.z), 
        0., -focal.y / cam.z, (focal.y * cam.y) / (cam.z * cam.z), 
        0., 0., 0.
    );

    mat3 T = transpose(mat3(view)) * J;
    mat3 cov2d = transpose(T) * Vrk * T;

    float mid = (cov2d[0][0] + cov2d[1][1]) / 2.0;
    float radius = length(vec2((cov2d[0][0] - cov2d[1][1]) / 2.0, cov2d[0][1]));
    float lambda1 = mid + radius, lambda2 = mid - radius;

    if(lambda2 < 0.0) return;
    vec2 diagonalVector = normalize(vec2(cov2d[0][1], lambda1 - cov2d[0][0]));
    vec2 majorAxis = min(sqrt(2.0 * lambda1), 1024.0) * diagonalVector;
    vec2 minorAxis = min(sqrt(2.0 * lambda2), 1024.0) * vec2(diagonalVector.y, -diagonalVector.x);

    vColor = clamp(pos2d.z/pos2d.w+1.0, 0.0, 1.0) * vec4((cov.w) & 0xffu, (cov.w >> 8) & 0xffu, (cov.w >> 16) & 0xffu, (cov.w >> 24) & 0xffu) / 255.0;
    vPosition = position;

    vec2 vCenter = vec2(pos2d) / pos2d.w;
    gl_Position = vec4(
        vCenter 
        + position.x * majorAxis / viewport 
        + position.y * minorAxis / viewport, 0.0, 1.0);

}
`.trim();

const fragmentShaderSource = `
#version 300 es
precision highp float;

in vec4 vColor;
in vec2 vPosition;

out vec4 fragColor;

void main () {
    float A = -dot(vPosition, vPosition);
    if (A < -4.0) discard;
    float B = exp(A) * vColor.a;
    fragColor = vec4(B * vColor.rgb, B);
}

`.trim();

// 横着看，第一行就是常规的矩阵的第一列
// let defaultViewMatrix = [  // 默认
//      0.47,  0.04, 0.88, 0, 
//     -0.11,  0.99, 0.02, 0, 
//     -0.88, -0.11, 0.47, 0, 
//      0.07,  0.03, 6.55, 1,
// ];
async function main() {
    let actualViewMatrix;
    let carousel = false;  // 加载场景后是否自动旋转
    const params = new URLSearchParams(location.search);
    try {
        viewMatrix = JSON.parse(decodeURIComponent(location.hash.slice(1)));
        carousel = false;
    } catch (err) {}

    let url = new URL(
        // "nike.splat",
        // location.href,
        params.get("url") || currentScene + ".splat",
        // location.origin + "/assets/3dgs/",
        "https://raw.githubusercontent.com/guidons-master/maplab/main/assets/3dgs/"
    );
    let req = await fetch(url, {
        mode: "cors", // no-cors, *cors, same-origin
        // redirect: 'follow', // manual, *follow, error
    });
    if (req.status != 200)
        throw new Error(req.status + " Unable to load " + req.url);

    const rowLength = 3 * 4 + 3 * 4 + 4 + 4;  // 32
    let reader = req.body.getReader();
    let splatData = new Uint8Array(req.headers.get("content-length"));
    const downsample =
        splatData.length / rowLength > 500000 ? 1 : 1 / devicePixelRatio;

    // 创建了一个新的Web Worker，用于在后台线程中执行一些任务，以避免阻塞主线程
    // 后台线程会执行一个名为"createWorker"的函数，该函数接收一个参数，即"self"
    const worker = new Worker(
        URL.createObjectURL(
            new Blob(["(", createWorker.toString(), ")(self)"], {
                type: "application/javascript",
            }),
        ),
    );

    const canvas = document.getElementById("canvas");
    const fps = document.getElementById("fps");
    const camid = document.getElementById("camid");

    let projectionMatrix;

    // 初始化webgl上下文
    const gl = canvas.getContext("webgl2", {
        antialias: false,
    });

    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    gl.compileShader(vertexShader);
    if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS))
        console.error(gl.getShaderInfoLog(vertexShader));

    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);
    gl.compileShader(fragmentShader);
    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS))
        console.error(gl.getShaderInfoLog(fragmentShader));

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS))
        console.error(gl.getProgramInfoLog(program));

    gl.disable(gl.DEPTH_TEST); // Disable depth testing

    // Enable blending
    gl.enable(gl.BLEND);
    // blendFuncSeparate(srcRGB, dstRGB, srcAlpha, dstAlpha)
    
    gl.blendFuncSeparate(
        gl.ONE_MINUS_DST_ALPHA,  // 1-AD
        gl.ONE,                  // 1
        gl.ONE_MINUS_DST_ALPHA,  // 1-AD
        gl.ONE,                  // 1
    );
    // 设置 RGB 和 Alpha 通道的混合方程为加法运算符
    // 最终输出颜色 = 源颜色 * sfactor + 目标颜色 * dfactor
    // 最终输出颜色 = 源颜色 * (1-Alpha_dst) + 目标颜色 * 1
    // 最终输出Alpha = 源Alpha * (1-Alpha_dst) + 目标Alpha * 1
    gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD); 

    const u_projection = gl.getUniformLocation(program, "projection");
    const u_viewport = gl.getUniformLocation(program, "viewport");
    const u_focal = gl.getUniformLocation(program, "focal");
    const u_view = gl.getUniformLocation(program, "view");

    // positions
    const triangleVertices = new Float32Array([-2, -2, 2, -2, 2, 2, -2, 2]);
    const vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, triangleVertices, gl.STATIC_DRAW);
    const a_position = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(a_position);
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.vertexAttribPointer(a_position, 2, gl.FLOAT, false, 0, 0);

    var texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);

    var u_textureLocation = gl.getUniformLocation(program, "u_texture");
    gl.uniform1i(u_textureLocation, 0);

    const indexBuffer = gl.createBuffer();
    const a_index = gl.getAttribLocation(program, "index");
    gl.enableVertexAttribArray(a_index);
    gl.bindBuffer(gl.ARRAY_BUFFER, indexBuffer);
    gl.vertexAttribIPointer(a_index, 1, gl.INT, false, 0, 0);
    gl.vertexAttribDivisor(a_index, 1);

    const resize = () => {
        gl.uniform2fv(u_focal, new Float32Array([camera.fx, camera.fy]));

        projectionMatrix = getProjectionMatrix(
            camera.fx,
            camera.fy,
            innerWidth,
            innerHeight,
        );

        gl.uniform2fv(u_viewport, new Float32Array([innerWidth, innerHeight]));

        gl.canvas.width = Math.round(innerWidth / downsample);
        gl.canvas.height = Math.round(innerHeight / downsample);
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

        gl.uniformMatrix4fv(u_projection, false, projectionMatrix);
    };

    window.addEventListener("resize", resize);
    resize();

    worker.onmessage = (e) => {
        if (e.data.buffer) {  // 将buffer数据转换为splat文件并在浏览器中进行下载
            // splatData = new Uint8Array(e.data.buffer);
            // const blob = new Blob([splatData.buffer], {
            //     type: "application/octet-stream",
            // });
            // const link = document.createElement("a");
            // link.download = "model.splat";
            // link.href = URL.createObjectURL(blob);
            // document.body.appendChild(link);
            // link.click();
        } else if (e.data.texdata) {
            const { texdata, texwidth, texheight } = e.data;
            // console.log(texdata)
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.texParameteri(
                gl.TEXTURE_2D,
                gl.TEXTURE_WRAP_S,
                gl.CLAMP_TO_EDGE,
            );
            gl.texParameteri(
                gl.TEXTURE_2D,
                gl.TEXTURE_WRAP_T,
                gl.CLAMP_TO_EDGE,
            );
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
            
            gl.texImage2D(
                gl.TEXTURE_2D,
                0,
                gl.RGBA32UI,
                texwidth,
                texheight,
                0,
                gl.RGBA_INTEGER,
                gl.UNSIGNED_INT,
                texdata,
            );

            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, texture);
            viewMatrix = scenes[currentSceneId].defaultViewMatrix[sceneViewId];
            worldY = scenes[currentSceneId].worldY;
            camUp = [viewMatrix[1], viewMatrix[5], viewMatrix[9]];  // 相机上方向
            transitionsFlag = false;
        } else if (e.data.depthIndex) {
            const { depthIndex, viewProj } = e.data;
            gl.bindBuffer(gl.ARRAY_BUFFER, indexBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, depthIndex, gl.DYNAMIC_DRAW);
            vertexCount = e.data.vertexCount;
        }
    };

    let activeKeys = [];
	let currentCameraIndex = 0;

    window.addEventListener("keydown", (e) => {
        // if (document.activeElement != document.body) return;
        carousel = false;
        if (!activeKeys.includes(e.code)) activeKeys.push(e.code);
        //  检查被按下的按键是否为数字，根据数字确定现在相机参数，或者通过+-来循环切换相机
        if (/\d/.test(e.key)) {
            currentCameraIndex = parseInt(e.key)
            camera = cameras[currentCameraIndex];
            viewMatrix = getViewMatrix(camera);
        }
		if (['-', '_'].includes(e.key)){
			currentCameraIndex = (currentCameraIndex + cameras.length - 1) % cameras.length;
			viewMatrix = getViewMatrix(cameras[currentCameraIndex]);
		}
		if (['+', '='].includes(e.key)){
			currentCameraIndex = (currentCameraIndex + 1) % cameras.length;
			viewMatrix = getViewMatrix(cameras[currentCameraIndex]);
		}

        camid.innerText = "cam  " + currentCameraIndex;
        
         // 将当前页面的视图矩阵转换为JSON字符串，并将其作为哈希值添加到URL中。这可以用于在页面中保存和恢复视图状态，例如在页面滚动、缩放和旋转时。
        if (e.code == "KeyV") {
            location.hash =
                "#" +
                JSON.stringify(
                    viewMatrix.map((k) => Math.round(k * 100) / 100),
                );
                camid.innerText =""
        } else if (e.code === "KeyP") {
            carousel = true;  // 开启自动旋转模式
            camid.innerText =""
        }
    });
    window.addEventListener("keyup", (e) => {
        if (activeKeys.includes("KeyZ")) {
            console.log("actualViewMatrix:", actualViewMatrix);

            let c2w = invert4(actualViewMatrix);
            console.log("camera position:", "[" + c2w.slice(12, 15).join(", ") + "]");

            console.log("worldY:", "[" + actualViewMatrix[1] + ", " + actualViewMatrix[5] + ", " + actualViewMatrix[9] + "]");
        }
        activeKeys = activeKeys.filter((k) => k !== e.code);
    });
    window.addEventListener("blur", () => {
        activeKeys = [];
    });

    window.addEventListener(
        "wheel",
        (e) => {
            carousel = false;
            e.preventDefault();  // 阻止事件默认行为。wheel事件的默认操作是滚动页面。当用户在页面上滚动鼠标滚轮时，页面会相应地滚动。
            const lineHeight = 10;
             // e.deltaMode: 0
            const scale =  // 1
                e.deltaMode == 1
                    ? lineHeight
                    : e.deltaMode == 2
                    ? innerHeight
                    : 1;
            let inv = invert4(viewMatrix);  // w2c矩阵
            if (e.shiftKey) {
                inv = translate4(
                    inv,
                    (e.deltaX * scale) / innerWidth,   // 鼠标滚轮滚动，只有deltaY有值，deltaX没有值
                    (e.deltaY * scale) / innerHeight,  // 滚轮往下，e.deltaY为正值，w2c矩阵的平移向量（即世界坐标系原点在世界坐标系中的位置）的y值增加，反过来看是相机向下移动
                    0,
                );
            } else if (e.ctrlKey || e.metaKey) {  //  metaKey在MAC键盘上，表示Command键（⌘），在Windows键盘上，表示Windows键
                // inv = rotate4(inv,  (e.deltaX * scale) / innerWidth,  0, 0, 1);
                // inv = translate4(inv,  0, (e.deltaY * scale) / innerHeight, 0);
                // let preY = inv[13];
                inv = translate4(
                    inv,
                    0,
                    0,
                    (-10 * (e.deltaY * scale)) / innerHeight,  // 滚轮向下，e.deltaY为正值，w2c矩阵的平移向量（即世界坐标系原点在世界坐标系中的位置）的z值减少（-10的影响），反过来看是相机向后（z轴正方向）移动
                );
                // inv[13] = preY;
            } else {
                let d = 4;
                // inv = translate4(inv, 0, 0, d);  // 相机向前移动
                inv = rotate4(inv, -(e.deltaX * scale) / innerWidth, 0, 1, 0);
                inv = rotate4(inv, (e.deltaY * scale) / innerHeight, 1, 0, 0);  // 滚轮向下，e.deltaY为正值，世界坐标系绕相机坐标系x轴向前旋转，从相机角度看，相机仰视角度增大
                // inv = translate4(inv, 0, 0, -d);  // 相机向后移动回去
            }

            viewMatrix = invert4(inv);  // w2c矩阵->c2w矩阵
        },
        { passive: false },
    );

    let startX, startY, down;
    canvas.addEventListener("mousedown", (e) => {
        carousel = false;
        e.preventDefault();  // mousedown事件的默认行为是选中文本或元素。当用户在页面上按下鼠标按钮时，如果鼠标指针悬停在文本或元素上，那么该文本或元素将被选中。
        startX = e.clientX;
        startY = e.clientY;
        down = e.ctrlKey || e.metaKey ? 2 : 1;  // 如果鼠标左键和ctrlKey同时按下，则down为2，否则为1
    });
    canvas.addEventListener("contextmenu", (e) => {
        carousel = false;
        e.preventDefault();  // contextmenu事件的默认行为是显示右键菜单。当用户在页面上右键单击时，浏览器会自动显示一个包含各种操作选项的菜单。
        startX = e.clientX;
        startY = e.clientY;
        down = 2;  // 如果鼠标右键按下，则down为2
    });

    canvas.addEventListener("mousemove", (e) => {
        e.preventDefault();
        if (down == 1) {  // 按住鼠标左键在窗口上拖动
            let inv = invert4(viewMatrix);
            let dx = (5 * (e.clientX - startX)) / innerWidth;
            let dy = (5 * (e.clientY - startY)) / innerHeight;
            let d = 4;

            // inv = translate4(inv, 0, 0, d);
            inv = rotate4_y(inv, dx);  // 鼠标向右拖动，dx增大，世界坐标系绕相机坐标系y轴逆时针旋转，从相机角度看，相机视角向右旋转
            if((vectorPlaneAngle([inv[8], inv[9], inv[10]], camUp) <= scenes[currentSceneId].fov / 2.0) && (dy <= 0))
                inv = rotate4(inv, -dy, 1, 0, 0);  // 鼠标向下拖动，dy增大，-dy减小
            if((vectorPlaneAngle([inv[8], inv[9], inv[10]], camUp) >= -scenes[currentSceneId].fov / 2.0) && (dy > 0))
                inv = rotate4(inv, -dy, 1, 0, 0);  // 鼠标向下拖动，dy增大，-dy减小

            // inv = translate4(inv, 0, 0, -d);
            // let postAngle = Math.atan2(inv[0], inv[10])
            // inv = rotate4(inv, postAngle - preAngle, 0, 0, 1)
            // console.log(postAngle)
            viewMatrix = invert4(inv);

            startX = e.clientX;
            startY = e.clientY;
        } else if (down == 2) {
            let inv = invert4(viewMatrix);
            // inv = rotateY(inv, );
            // let preY = inv[13];
            inv = translate4(
                inv,
                (-10 * (e.clientX - startX)) / innerWidth,
                0,
                (10 * (e.clientY - startY)) / innerHeight,
            );
            // inv[13] = preY;
            viewMatrix = invert4(inv);

            startX = e.clientX;
            startY = e.clientY;
        }
    });
    canvas.addEventListener("mouseup", (e) => {
        e.preventDefault();
        down = false;
        startX = 0;
        startY = 0;
    });

    let altX = 0,
        altY = 0;
    canvas.addEventListener(
        "touchstart",
        (e) => {
            e.preventDefault();
            if (e.touches.length === 1) {
                carousel = false;
                startX = e.touches[0].clientX;
                startY = e.touches[0].clientY;
                down = 1;
            } else if (e.touches.length === 2) {
                // console.log('beep')
                carousel = false;
                startX = e.touches[0].clientX;
                altX = e.touches[1].clientX;
                startY = e.touches[0].clientY;
                altY = e.touches[1].clientY;
                down = 1;
            }
        },
        { passive: false },
    );
    canvas.addEventListener(
        "touchmove",
        (e) => {
            e.preventDefault();
            if (e.touches.length === 1 && down) {
                let inv = invert4(viewMatrix);
                let dx = (4 * (e.touches[0].clientX - startX)) / innerWidth;
                let dy = (4 * (e.touches[0].clientY - startY)) / innerHeight;

                let d = 4;
                inv = translate4(inv, 0, 0, d);
                // inv = translate4(inv,  -x, -y, -z);
                // inv = translate4(inv,  x, y, z);
                inv = rotate4(inv, dx, 0, 1, 0);
                inv = rotate4(inv, -dy, 1, 0, 0);
                inv = translate4(inv, 0, 0, -d);

                viewMatrix = invert4(inv);

                startX = e.touches[0].clientX;
                startY = e.touches[0].clientY;
            } else if (e.touches.length === 2) {
                // alert('beep')
                const dtheta =
                    Math.atan2(startY - altY, startX - altX) -
                    Math.atan2(
                        e.touches[0].clientY - e.touches[1].clientY,
                        e.touches[0].clientX - e.touches[1].clientX,
                    );
                const dscale =
                    Math.hypot(startX - altX, startY - altY) /
                    Math.hypot(
                        e.touches[0].clientX - e.touches[1].clientX,
                        e.touches[0].clientY - e.touches[1].clientY,
                    );
                const dx =
                    (e.touches[0].clientX +
                        e.touches[1].clientX -
                        (startX + altX)) /
                    2;
                const dy =
                    (e.touches[0].clientY +
                        e.touches[1].clientY -
                        (startY + altY)) /
                    2;
                let inv = invert4(viewMatrix);
                // inv = translate4(inv,  0, 0, d);
                inv = rotate4(inv, dtheta, 0, 0, 1);

                inv = translate4(inv, -dx / innerWidth, -dy / innerHeight, 0);

                // let preY = inv[13];
                inv = translate4(inv, 0, 0, 3 * (1 - dscale));
                // inv[13] = preY;

                viewMatrix = invert4(inv);

                startX = e.touches[0].clientX;
                altX = e.touches[1].clientX;
                startY = e.touches[0].clientY;
                altY = e.touches[1].clientY;
            }
        },
        { passive: false },
    );
    canvas.addEventListener(
        "touchend",
        (e) => {
            e.preventDefault();
            down = false;
            startX = 0;
            startY = 0;
        },
        { passive: false },
    );

    let jumpDelta = 0;
    let vertexCount = 0;

    let lastFrame = 0;
    let avgFps = 0;
    let start = 0;

    window.addEventListener("gamepadconnected", (e) => {
        const gp = navigator.getGamepads()[e.gamepad.index];
        console.log(
            `Gamepad connected at index ${gp.index}: ${gp.id}. It has ${gp.buttons.length} buttons and ${gp.axes.length} axes.`,
        );
    });
    window.addEventListener("gamepaddisconnected", (e) => {
        console.log("Gamepad disconnected");
    });

    let leftGamepadTrigger, rightGamepadTrigger;

    const selectFile = (file) => {
        const fr = new FileReader();
        if (/\.json$/i.test(file.name)) {
            fr.onload = () => {
                cameras = JSON.parse(fr.result);
                viewMatrix = getViewMatrix(cameras[0]);
                projectionMatrix = getProjectionMatrix(
                    camera.fx / downsample,
                    camera.fy / downsample,
                    canvas.width,
                    canvas.height,
                );
                gl.uniformMatrix4fv(u_projection, false, projectionMatrix);

                console.log("Loaded Cameras");
            };
            fr.readAsText(file);
        } else {
            stopLoading = true;
            fr.onload = () => {
                splatData = new Uint8Array(fr.result);
                // console.log(splatData);
                // console.log(splatData[0], splatData[1], splatData[2], splatData[1]);
                console.log("Loaded", Math.floor(splatData.length / rowLength));  // 顶点数

                if (  // 如果该文件是ply文件
                    splatData[0] == 112 &&  // 'p'
                    splatData[1] == 108 &&  // 'l'
                    splatData[2] == 121 &&  // 'y'
                    splatData[3] == 10      // 换行符LF
                ) {
                    // ply file magic header means it should be handled differently
                    console.log("Ply file detected");
                    worker.postMessage({ ply: splatData.buffer });
                } else {
                    if(transitionsFlag){
                        setTimeout(() => {
                            worker.postMessage({
                                buffer: splatData.buffer,
                                vertexCount: Math.floor(splatData.length / rowLength),
                            });
                        }, 
                        100);
                    }else{
                        worker.postMessage({
                            buffer: splatData.buffer,
                            vertexCount: Math.floor(splatData.length / rowLength),
                        });
                    }
                    // worker.postMessage({
                    //     buffer: splatData.buffer,
                    //     vertexCount: Math.floor(splatData.length / rowLength),
                    // });
                }
            };
            fr.readAsArrayBuffer(file);
        }
    };

    // 切换场景
    const changeScene = (nextSceneIndex) => {
        currentScene = scenes[nextSceneIndex].name;
        currentSceneId = nextSceneIndex;
        fetch("/assets/3dgs/" + currentScene + '.splat')
            .then((response) => response.blob())
            .then((blob) => {
                const file = new File([blob], currentScene + '.splat', { type: blob.type });
                selectFile(file);
            })
            .catch((error) => {
                console.error('Error fetching file:', error);
            });
    }
    
    const frame = (now) => {  // 表示当前回调函数被调用的时间戳，以毫秒为单位
        let inv = invert4(viewMatrix);  // c2w矩阵
        let shiftKey = activeKeys.includes("Shift") || activeKeys.includes("ShiftLeft") || activeKeys.includes("ShiftRight")

        if (activeKeys.includes("ArrowUp")) {  // 方向键↑
            if (shiftKey) {
                inv = translate4(inv, 0, -0.03, 0);
            } else {
                // inv = translate4(inv, 0, 0, 0.1);  // 世界向相机靠近，相机前进
                if(vectorPlaneAngle([inv[8], inv[9], inv[10]], camUp) <= scenes[sceneViewId].fov / 2.0)
                    inv = rotate4(inv, 0.005, 1, 0, 0);
            }
        }
        if (activeKeys.includes("ArrowDown")) {  // 方向键↓
            if (shiftKey) {
                inv = translate4(inv, 0, 0.03, 0);
            } else {
                // inv = translate4(inv, 0, 0, -0.1);  // 相机后退
                if(vectorPlaneAngle([inv[8], inv[9], inv[10]], camUp) >= -scenes[sceneViewId].fov / 2.0)
                    inv = rotate4(inv, -0.005, 1, 0, 0);
            }
        }
        if (activeKeys.includes("ArrowLeft"))  // 方向键←
            // inv = translate4(inv, -0.03, 0, 0);  // 
            inv = rotate4_y(inv, -0.01);
        
        if (activeKeys.includes("ArrowRight"))  // 方向键→
            // inv = translate4(inv, 0.03, 0, 0);
            inv = rotate4_y(inv, 0.01);
        
        let projectiveVector_fb = projectVectorOntoPlaneAndNormalize(inv.slice(8, 11), worldY);
        let projectiveVector_lf = projectVectorOntoPlaneAndNormalize(inv.slice(0, 3), worldY);

        if(transitionsFlag)
            inv = translate4_2(inv, projectiveVector_fb[0]*0.3, 0, projectiveVector_fb[2]*0.3);


        const borderDetection = (point) =>{
            let scene = scenes[currentSceneId];
            for(let i = 0; i < scenes[currentSceneId].border.length; i++) {
                if(scene.border[i].contain(point)){
                    console.log("border", i);
                    return i;
                }
            }
            return -1;
     }

        let borderId = borderDetection([inv[12], inv[13], inv[14]]);
        if(borderId == -1){
            let nextPosition;
            let tmpInv = inv;
            // 下面的写法存在bug，仍然是按照原始的世界坐标系进行移动的 
            if (activeKeys.includes("KeyW")) {
                tmpInv = translate4_2(tmpInv, projectiveVector_fb[0]*0.1, 0, projectiveVector_fb[2]*0.1);
                nextPosition = tmpInv.slice(12, 15);
                if(borderDetection(nextPosition) == -1)
                    inv = tmpInv;

            }
            if (activeKeys.includes("KeyS")){
                tmpInv = translate4_2(tmpInv, -projectiveVector_fb[0]*0.1, 0, -projectiveVector_fb[2]*0.1)
                nextPosition = tmpInv.slice(12, 15);
                if(borderDetection(nextPosition) == -1)
                    inv = tmpInv;
            } 
            if (activeKeys.includes("KeyA")){
                tmpInv = translate4_2(tmpInv, -projectiveVector_lf[0]*0.05, 0, -projectiveVector_lf[2]*0.03);
                nextPosition = tmpInv.slice(12, 15);
                if(borderDetection(nextPosition) == -1)
                    inv = tmpInv;
            } 
            if (activeKeys.includes("KeyD")){
                tmpInv = translate4_2(tmpInv, projectiveVector_lf[0]*0.05, 0, projectiveVector_lf[2]*0.03);
                nextPosition = tmpInv.slice(12, 15);
                if(borderDetection(nextPosition) == -1)
                    inv = tmpInv;
            }   
        }
        

        if (activeKeys.includes("KeyQ")) inv = rotate4(inv, 0.01, 0, 0, 1);
        if (activeKeys.includes("KeyE")) inv = rotate4(inv, -0.01, 0, 0, 1);

        const gamepads = navigator.getGamepads ? navigator.getGamepads() : [];
        let isJumping = activeKeys.includes("Space");
        for (let gamepad of gamepads) {
            if (!gamepad) continue;

            const axisThreshold = 0.1; // Threshold to detect when the axis is intentionally moved
            const moveSpeed = 0.06;
            const rotateSpeed = 0.02;

            // Assuming the left stick controls translation (axes 0 and 1)
            if (Math.abs(gamepad.axes[0]) > axisThreshold) {
                inv = translate4(inv, moveSpeed * gamepad.axes[0], 0, 0);
                carousel = false;
            }
            if (Math.abs(gamepad.axes[1]) > axisThreshold) {
                inv = translate4(inv, 0, 0, -moveSpeed * gamepad.axes[1]);
                carousel = false;
            }
            if(gamepad.buttons[12].pressed || gamepad.buttons[13].pressed){
                inv = translate4(inv, 0, -moveSpeed*(gamepad.buttons[12].pressed - gamepad.buttons[13].pressed), 0);
                carousel = false;
            }

            if(gamepad.buttons[14].pressed || gamepad.buttons[15].pressed){
                inv = translate4(inv, -moveSpeed*(gamepad.buttons[14].pressed - gamepad.buttons[15].pressed), 0, 0);
                carousel = false;
            }

            // Assuming the right stick controls rotation (axes 2 and 3)
            if (Math.abs(gamepad.axes[2]) > axisThreshold) {
                inv = rotate4(inv, rotateSpeed * gamepad.axes[2], 0, 1, 0);
                carousel = false;
            }
            if (Math.abs(gamepad.axes[3]) > axisThreshold) {
                inv = rotate4(inv, -rotateSpeed * gamepad.axes[3], 1, 0, 0);
                carousel = false;
            }

            let tiltAxis = gamepad.buttons[6].value - gamepad.buttons[7].value;
            if (Math.abs(tiltAxis) > axisThreshold) {
                inv = rotate4(inv, rotateSpeed * tiltAxis, 0, 0, 1);
                carousel = false;
            }
            if (gamepad.buttons[4].pressed && !leftGamepadTrigger) {
                camera = cameras[(cameras.indexOf(camera)+1)%cameras.length]
                inv = invert4(getViewMatrix(camera));
                carousel = false;
            }
            if (gamepad.buttons[5].pressed && !rightGamepadTrigger) {
                camera = cameras[(cameras.indexOf(camera)+cameras.length-1)%cameras.length]
                inv = invert4(getViewMatrix(camera));
                carousel = false;
            }
            leftGamepadTrigger = gamepad.buttons[4].pressed;
            rightGamepadTrigger = gamepad.buttons[5].pressed;
            if (gamepad.buttons[0].pressed) {
                isJumping = true;
                carousel = false;
            }
            if(gamepad.buttons[3].pressed){
                carousel = true;
            }
        }

        if (
            ["KeyJ", "KeyK", "KeyL", "KeyI"].some((k) => activeKeys.includes(k))  // some()方法是数组的一个内置方法，它会对数组中的每个元素执行一个回调函数，直到找到一个返回true的元素
        ) {
            let d = 4;
            inv = translate4(inv, 0, 0, d);
            inv = rotate4(
                inv,
                activeKeys.includes("KeyJ")
                    ? -0.05
                    : activeKeys.includes("KeyL")
                    ? 0.05
                    : 0,
                0,
                1,
                0,
            );
            inv = rotate4(
                inv,
                activeKeys.includes("KeyI")
                    ? 0.05
                    : activeKeys.includes("KeyK")
                    ? -0.05
                    : 0,
                1,
                0,
                0,
            );
            inv = translate4(inv, 0, 0, -d);
        }
        viewMatrix = invert4(inv);  // w2c矩阵

        if (carousel) {
            let inv = invert4(defaultViewMatrix);

            const t = Math.sin((Date.now() - start) / 5000);
            inv = translate4(inv, 2.5 * t, 0, 6 * (1 - Math.cos(t)));
            inv = rotate4(inv, -0.6 * t, 0, 1, 0);

            viewMatrix = invert4(inv);
        }

        if (isJumping) {
            jumpDelta = Math.min(1, jumpDelta + 0.05);
        } else {
            jumpDelta = Math.max(0, jumpDelta - 0.05);
        }

        let inv2 = invert4(viewMatrix);  // c2w矩阵
        inv2 = translate4(inv2, 0, -jumpDelta, 0);
        inv2 = rotate4(inv2, -0.1 * jumpDelta, 1, 0, 0);

        // 检查是否到达场景边界,若到达则切换场景
        for(let i = 0; i < scenes[currentSceneId].channels.length; i++) {
            let scene = scenes[currentSceneId];
            let point = [inv2[12], inv2[13], inv2[14]];
            if (scene.channels[i].contain(point)) {
                // console.log("切换边界");
                let nextSceneIndex = scene.associatedScenes[i][0];
                sceneViewId = scene.associatedScenes[i][1];
                transitionsFlag = true;
                changeScene(nextSceneIndex);
                break;
            }
        }
        
        actualViewMatrix = invert4(inv2);  // w2c矩阵

        const viewProj = multiply4(projectionMatrix, actualViewMatrix);  // 得到视图投影矩阵
        worker.postMessage({ view: viewProj });

        const currentFps = 1000 / (now - lastFrame) || 0;
        avgFps = avgFps * 0.9 + currentFps * 0.1;
        if (vertexCount > 0) {
            document.getElementById("spinner").style.display = "none";
            document.getElementById("fullscreenButton").style.display = "";
            gl.uniformMatrix4fv(u_view, false, actualViewMatrix);  // 将视图矩阵传递给顶点着色器。视图矩阵的元素排列顺序为列优先，即每一列的元素按照行优先的顺序存储。
            gl.clear(gl.COLOR_BUFFER_BIT);
            gl.drawArraysInstanced(gl.TRIANGLE_FAN, 0, 4, vertexCount);
        } else {
            gl.clear(gl.COLOR_BUFFER_BIT);
            document.getElementById("spinner").style.display = "";
            document.getElementById("fullscreenButton").style.display = "none";
            start = Date.now() + 2000;
        }
        const progress = (100 * vertexCount) / (splatData.length / rowLength);  // 当前已经加载了多少百分比的顶点。splatData.length文件中所有顶点数据的字节数，rowLength是每行顶点数据的字节数，splatData.length/rowLength顶点总个数
        if (progress < 100) {
            document.getElementById("progress").style.width = progress + "%";
        } else {
            document.getElementById("progress").style.display = "none";
        }
        fps.innerText = Math.round(avgFps) + " fps";
        if (isNaN(currentCameraIndex)){
            camid.innerText = "";
        }
        lastFrame = now;
        requestAnimationFrame(frame);  // 执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行。
    };

    frame();

    window.addEventListener("hashchange", (e) => {
        try {
            viewMatrix = JSON.parse(decodeURIComponent(location.hash.slice(1)));
            carousel = false;
        } catch (err) {}
    });

    const preventDefault = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };
    document.addEventListener("dragenter", preventDefault);
    document.addEventListener("dragover", preventDefault);
    document.addEventListener("dragleave", preventDefault);
    document.addEventListener("drop", (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log(e);
        selectFile(e.dataTransfer.files[0]);
    });

    let bytesRead = 0;
    let lastVertexCount = -1;
    let stopLoading = false;

    while (true) {
        const { done, value } = await reader.read();
        if (done || stopLoading) break;

        splatData.set(value, bytesRead);
        bytesRead += value.length;

        if (vertexCount > lastVertexCount) {
            worker.postMessage({
                buffer: splatData.buffer,
                vertexCount: Math.floor(bytesRead / rowLength),
            });
            lastVertexCount = vertexCount;
        }
    }
    if (!stopLoading)
        worker.postMessage({
            buffer: splatData.buffer,
            vertexCount: Math.floor(bytesRead / rowLength),
        });
}

main().catch((err) => {
    document.getElementById("spinner").style.display = "none";
    // document.getElementById("message").innerText = err.toString();
});
