// application
import { ICategoryDef } from '~/fake-server/interfaces/category-def';
import { makeIdGenerator } from '~/fake-server/utils';
import {
    IBaseCategory,
    IBlogCategory,
    ICategory,
    IShopCategory,
} from '~/interfaces/category';

const getNextId = makeIdGenerator();

function makeShopCategory(def: ICategoryDef, parent: IShopCategory | null): IShopCategory {
    return {
        id: getNextId(),
        type: 'shop',
        name: def.name,
        slug: def.slug,
        image: def.image || null,
        items: def.items,
        parent,
        children: [],
        layout: def.layout ? def.layout : 'products',
        customFields: {},
    };
}

function makeBlogCategory(def: ICategoryDef, parent: IBlogCategory | null): IBlogCategory {
    return {
        id: getNextId(),
        type: 'blog',
        name: def.name,
        slug: def.slug,
        image: def.image || null,
        items: def.items,
        parent,
        children: [],
        customFields: {},
    };
}

function makeCategories<T extends IBaseCategory>(
    makeFn: (def: ICategoryDef, parent: T | null) => T,
    defs: ICategoryDef[],
    parent: T | null = null,
): T[] {
    const categories: T[] = [];

    defs.forEach((def) => {
        const category: T = makeFn(def, parent);

        if (def.children) {
            category.children = makeCategories(makeFn, def.children, category);
        }

        categories.push(category);
    });

    return categories;
}

function flatTree<T extends ICategory>(categories: T[]): T[] {
    let result: T[] = [];

    categories.forEach((category) => {
        result = [...result, category, ...flatTree(category.children as T[])];
    });

    return result;
}

const shopCategoriesDef: ICategoryDef[] = [
    {
        name: 'IDLER',
        slug: 'IDLER',
        image: '/images/categories/IDLER.jpg',
        items: 106,
        children: [
            {
                name: "IDLER",
                slug: "IDLER"
            },
            {
                name: "IGNITION",
                slug: "IGNITION"
            },
            {
                name: "INDICATOR",
                slug: "INDICATOR"
            },
            {
                name: "INJECTOR",
                slug: "INJECTOR"
            },
            {
                name: "INSERT",
                slug: "INSERT"
            },
            {
                name: "INSTRUMENT",
                slug: "INSTRUMENT"
            },
            {
                name: "INSULATOR",
                slug: "INSULATOR"
            },
            {
                name: "INTAKE",
                slug: "INTAKE"
            },
            {
                name: "INTERIOR",
                slug: "INTERIOR"
            }
        ]
    },
    {
        name: 'ELECTRICAL',
        slug: 'ELECTRICAL',
        image: '/images/categories/Electrical.jpg',
        items: 508,
        children: [
            {
                name: "ELECTRICAL",
                slug: "ELECTRICAL"
            },
            {
                name: "ELEMENT",
                slug: "ELEMENT"
            },
            {
                name: "EMBLEM",
                slug: "EMBLEM"
            },
            {
                name: "END",
                slug: "END"
            },
            {
                name: "ENGINE",
                slug: "ENGINE"
            },
            {
                name: "EVAPORATOR",
                slug: "EVAPORATOR"
            },
            {
                name: "EXHAUST",
                slug: "EXHAUST"
            },
            {
                name: "EXPANSION",
                slug: "EXPANSION"
            },
            {
                name: "EXTENSION",
                slug: "EXTENSION"
            },
        ],
    },
    {
        name: 'MIRROR',
        slug: 'MIRROR',
        image: '/images/categories/MIRROR.jpg',
        items: 106,
        children: [
            {
                name: "MIRROR",
                slug: "MIRROR"
            },
            {
                name: "MODULE",
                slug: "MODULE"
            },
            {
                name: "MOLDING",
                slug: "MOLDING"
            },
            {
                name: "MOTOR",
                slug: "MOTOR"
            },
            {
                name: "MOUDLING",
                slug: "MOUDLING"
            },
            {
                name: "MOULDING",
                slug: "MOULDING"
            },
            {
                name: "MOUNT",
                slug: "MOUNT"
            },
            {
                name: "MOUNTING",
                slug: "MOUNTING"
            },
            {
                name: "MUD",
                slug: "MUD"
            },
            {
                name: "MULTIRIB",
                slug: "MULTIRIB"
            }
        ]
    }
    ,
    {
        name: 'THERMOSTAT AND HOUSING ',
        slug: 'THERMOSTAT-AND-HOUSING',
        image: '/images/categories/THERMOSTAT-AND-HOUSING.png',
        items: 106,
        children: [
            {
                name: "TANK",
                slug: "TANK"
            },
            {
                name: "TENSIONER",
                slug: "TENSIONER"
            },
            {
                name: "THERMOSTAT",
                slug: "THERMOSTAT"
            },
            {
                name: "THERMOSTAT AND HOUSING",
                slug: "THERMOSTAT-AND-HOUSING"
            },
            {
                name: "THROTTLE",
                slug: "THROTTLE"
            },
            {
                name: "THRUST",
                slug: "THRUST"
            },
            {
                name: "TIE ROD",
                slug: "TIE-ROD"
            },
            {
                name: "TIMING",
                slug: "TIMING"
            },
            {
                name: "TIMING CHAIN",
                slug: "TIMING-CHAIN"
            },
            {
                name: "TIRROD",
                slug: "TIRROD"
            },
            {
                name: "TRACK ROD",
                slug: "TRACK-ROD"
            },
            {
                name: "TRANSMISSION",
                slug: "TRANSMISSION"
            },
            {
                name: "TRIM",
                slug: "TRIM"
            },
            {
                name: "TRUNK",
                slug: "TRUNK"
            },
            {
                name: "TUBE",
                slug: "TUBE"
            },
            {
                name: "TURBO",
                slug: "TURBO"
            },
            {
                name: "TURN",
                slug: "TURN"
            },
            {
                name: "TYPE",
                slug: "TYPE"
            },
            {
                name: "TYRE",
                slug: "TYRE"
            },
            {
                name: "TYRE LINER",
                slug: "TYRE-LINER"
            }
        ]
    },
    {
        name: 'A/C',
        slug: 'AC',
        image: '/images/categories/FAN.jpg',
        items: 131,
        children: [
            {
                slug: "ABSORBER",
                name: "ABSORBER"
            },
            {
                slug: "AC-ASSY",
                name: "ACASSY"
            },
            {
                slug: "AC-BELT",
                name: "AC BELT"
            },
            {
                slug: "AC-BLOWER",
                name: "AC BLOWER"
            },
            {
                slug: "AC-BLOWER-MOTOR",
                name: "AC BLOWER MOTOR"
            },
            {
                slug: "AC-COMPRESSOR",
                name: "AC COMPRESSOR"
            },
            {
                slug: "AC-CONDENSER",
                name: "AC CONDENSER"
            },
            {
                slug: "AC-DRIER",
                name: "AC DRIER"
            },
            {
                slug: "AC-FAN",
                name: "AC FAN"
            },
            {
                slug: "ACCELERATOR",
                name: "ACCELERATOR"
            },
            {
                slug: "ACCUMUALTOR",
                name: "ACCUMUALTOR"
            },
            {
                slug: "ACTUATOR",
                name: "ACTUATOR"
            },
            {
                slug: "ADAPTER",
                name: "ADAPTER"
            },
            {
                slug: "ADDITIONAL",
                name: "ADDITIONAL"
            },
            {
                slug: "ADJUSTER",
                name: "ADJUSTER"
            },
            {
                slug: "AIR",
                name: "AIR"
            },
            {
                slug: "ALTERNATOR",
                name: "ALTERNATOR"
            },
            {
                slug: "ALTERNATOR ",
                name: "ALTERNATOR "
            },
            {
                slug: "AMPLIFIER",
                name: "AMPLIFIER"
            },
            {
                slug: "ANTENNA",
                name: "ANTENNA"
            },
            {
                slug: "ANTI-FREEZE",
                name: "ANTIFREEZE"
            },
            {
                slug: "ARM",
                name: "ARM"
            },
            {
                slug: "ASA-BOLT",
                name: "ASA BOLT"
            },
            {
                slug: "ASA-SCREW",
                name: "ASA SCREW"
            },
            {
                slug: "ASA-BOLT",
                name: "ASA-BOLT"
            },
            {
                slug: "ASHTRAY",
                name: "ASHTRAY"
            },
            {
                slug: "ATF",
                name: "ATF"
            },
            {
                slug: "AUDIO",
                name: "AUDIO"
            },
            {
                slug: "AUXILARY",
                name: "AUXILARY"
            },
            {
                slug: "AXLE",
                name: "AXLE"
            }
        ],
    },
    {
        name: 'BADGE',
        slug: 'BADGE',
        image: '/images/categories/BADGE.jpg',
        items: 356,
        children: [
            {
                name: "BADGE",
                slug: "BADGE"
            },
            {
                name: "BAFFLE",
                slug: "BAFFLE"
            },
            {
                name: "BALL",
                slug: "BALL"
            },
            {
                name: "BALL JOINT",
                slug: "BALL-JOINT"
            },
            {
                name: "BAR",
                slug: "BAR"
            },
            {
                name: "BASE",
                slug: "BASE"
            },
            {
                name: "BASIC",
                slug: "BASIC"
            },
            {
                name: "BATTERY",
                slug: "BATTERY"
            },
            {
                name: "BAZEL",
                slug: "BAZEL"
            },
            {
                name: "BEAM",
                slug: "BEAM"
            },
            {
                name: "BEARING",
                slug: "BEARING"
            },
            {
                name: "BELLOWS",
                slug: "BELLOWS"
            },
            {
                name: "BELT",
                slug: "BELT"
            },
            {
                name: "BLADE",
                slug: "BLADE"
            },
            {
                name: "BLINKER",
                slug: "BLINKER"
            },
            {
                name: "BLOWER",
                slug: "BLOWER"
            },
            {
                name: "BODY",
                slug: "BODY"
            },
            {
                name: "BOLT",
                slug: "BOLT"
            },
            {
                name: "BONET",
                slug: "BONET"
            },
            {
                name: "BOOT",
                slug: "BOOT"
            },
            {
                name: "BOWDEN CABLE",
                slug: "BOWDEN-CABLE"
            },
            {
                name: "BRACKET",
                slug: "BRACKET"
            },
            {
                name: "BRAKE",
                slug: "BRAKE"
            },
            {
                name: "BRAKE PAD",
                slug: "BRAKE-PAD"
            },
            {
                name: "BREATHER",
                slug: "BREATHER"
            },
            {
                name: "BRG",
                slug: "BRG"
            },
            {
                name: "BUFFER",
                slug: "BUFFER"
            },
            {
                name: "BULB",
                slug: "BULB"
            },
            {
                name: "BUMPER",
                slug: "BUMPER"
            },
            {
                name: "BUSH",
                slug: "BUSH"
            }
        ],
    },
    {
        name: 'CABLE',
        slug: 'CABLE',
        image: '/images/categories/cable.jpg',
        items: 54,
        children: [
            {
                name: "CABLE",
                slug: "CABLE"
            },
            {
                name: "CALIPER",
                slug: "CALIPER"
            },
            {
                name: "CAMERA",
                slug: "CAMERA"
            },
            {
                name: "CAP",
                slug: "CAP"
            },
            {
                name: "CARRIER",
                slug: "CARRIER"
            },
            {
                name: "CASE",
                slug: "CASE"
            },
            {
                name: "CATALYST CONVERTER",
                slug: "CATALYST-CONVERTER"
            },
            {
                name: "CATCH",
                slug: "CATCH"
            },
            {
                name: "CENTER",
                slug: "CENTER"
            },
            {
                name: "CHAIN",
                slug: "CHAIN"
            },
            {
                name: "CHANNEL",
                slug: "CHANNEL"
            },
            {
                name: "CHARGE",
                slug: "CHARGE"
            },
            {
                name: "CHASSIS",
                slug: "CHASSIS"
            },
            {
                name: "CHECK ASSY",
                slug: "CHECK-ASSY"
            },
            {
                name: "CHROME",
                slug: "CHROME"
            },
            {
                name: "CLAMP ",
                slug: "CLAMP"
            },
            {
                name: "CLIP",
                slug: "CLIP"
            },
            {
                name: "CLUTCH",
                slug: "CLUTCH"
            },
            {
                name: "CLY ASSY",
                slug: "CLY-ASSY"
            },
            {
                name: "COIL",
                slug: "COIL"
            },
            {
                name: "COMBI SWITCH",
                slug: "COMBI-SWITCH"
            },
            {
                name: "COMBINATION",
                slug: "COMBINATION"
            },
            {
                name: "COMPRESSION",
                slug: "COMPRESSION"
            },
            {
                name: "COMPRESSOR",
                slug: "COMPRESSOR"
            },
            {
                name: "COMPUTER",
                slug: "COMPUTER"
            },
            {
                name: "CONDENSER ",
                slug: "CONDENSER "
            },
            {
                name: "CONNECTING",
                slug: "CONNECTING"
            },
            {
                name: "CONNECTOR",
                slug: "CONNECTOR"
            },
            {
                name: "CONSOLE",
                slug: "CONSOLE"
            },
            {
                name: "CONTACT",
                slug: "CONTACT"
            },
            {
                name: "CONTROL",
                slug: "CONTROL"
            },
            {
                name: "CONVERTER",
                slug: "CONVERTER"
            },
            {
                name: "COOLANT",
                slug: "COOLANT"
            },
            {
                name: "COOLENT",
                slug: "COOLENT"
            },
            {
                name: "COOLER",
                slug: "COOLER"
            },
            {
                name: "COOLING",
                slug: "COOLING"
            },
            {
                name: "COUPLING",
                slug: "COUPLING"
            },
            {
                name: "COVER",
                slug: "COVER"
            },
            {
                name: "CRANK",
                slug: "CRANK"
            },
            {
                name: "CROSS",
                slug: "CROSS"
            },
            {
                name: "CUP",
                slug: "CUP"
            },
            {
                name: "CUSHION",
                slug: "CUSHION"
            },
            {
                name: "CUT BUSH",
                slug: "CUT-BUSH"
            },
            {
                name: "CV JOINT",
                slug: "CV-JOINT"
            },
            {
                name: "CYLENDER",
                slug: "CYLENDER"
            },
            {
                name: "CYLINDER",
                slug: "CYLINDER"
            },
        ],
    },
    {
        name: 'DAMPER',
        slug: 'DAMPER',
        image: '/images/categories/DAMPER.jpg',
        items: 274,
        children: [
            {
                name: "DAMPER",
                slug: "DAMPER"
            },
            {
                name: "DASHBOARD",
                slug: "DASHBOARD"
            },
            {
                name: "DEFLECTION",
                slug: "DEFLECTION"
            },
            {
                name: "DEFLECTOR",
                slug: "DEFLECTOR"
            },
            {
                name: "DELIVERY UNIT",
                slug: "DELIVERY-UNIT"
            },
            {
                name: "DICKY",
                slug: "DICKY"
            },
            {
                name: "DISC",
                slug: "DISC"
            },
            {
                name: "DISTRIBUTION",
                slug: "DISTRIBUTION"
            },
            {
                name: "DME",
                slug: "DME"
            },
            {
                name: "DOOR",
                slug: "DOOR"
            },
            {
                name: "DOWEL",
                slug: "DOWEL"
            },
            {
                name: "DRIER",
                slug: "DRIER"
            },
            {
                name: "DRIVE",
                slug: "DRIVE"
            },
            {
                name: "DRUM",
                slug: "DRUM"
            },
        ],
    },

    {
        name: 'FAN',
        slug: 'FAN',
        image: '/images/categories/FAN.jpg',
        items: 95,
        children: [
            {
                name: "FAN",
                slug: "FAN"
            },
            {
                name: "FASTENER",
                slug: "FASTENER"
            },
            {
                name: "FENDER",
                slug: "FENDER"
            },
            {
                name: "FIILTER",
                slug: "FIILTER"
            },
            {
                name: "FILLER CAP",
                slug: "FILLER-CAP"
            },
            {
                name: "FILLER FLAP",
                slug: "FILLER-FLAP"
            },
            {
                name: "FILLER NECK",
                slug: "FILLER-NECK"
            },
            {
                name: "FILLER PIPE",
                slug: "FILLER-PIPE"
            },
            {
                name: "FILLER PIPE WASH CONTAINER",
                slug: "FILLER-PIPE-WASH-CONTAINER"
            },
            {
                name: "FILLER SUB ASSY",
                slug: "FILLER-SUB-ASSY"
            },
            {
                name: "FILL-IN FLAP",
                slug: "FILL-IN-FLAP"
            },
            {
                name: "FILLISTER",
                slug: "FILLISTER"
            },
            {
                name: "FILM",
                slug: "FILM"
            },
            {
                name: "FILTER",
                slug: "FILTER"
            },
            {
                name: "FINISHER",
                slug: "FINISHER"
            },
            {
                name: "FITTING",
                slug: "FITTING"
            },
            {
                name: "FLANGE",
                slug: "FLANGE"
            },
            {
                name: "FLAP",
                slug: "FLAP"
            },
            {
                name: "FLOOR",
                slug: "FLOOR"
            },
            {
                name: "FOG",
                slug: "FOG"
            },
            {
                name: "FRAME",
                slug: "FRAME"
            },
            {
                name: "FRONR",
                slug: "FRONR"
            },
            {
                name: "FRONT",
                slug: "FRONT"
            },
            {
                name: "FUEL",
                slug: "FUEL"
            },
            {
                name: "FUNNEL",
                slug: "FUNNEL"
            },
            {
                name: "FUSE",
                slug: "FUSE"
            }
        ],
    },
    {
        name: 'Oils & Lubricants',
        slug: 'oils-lubricants',
        image: '/images/categories/Oils-Lubricants.jpeg',
        items: 179,
        children: [
            {
                name: "GASKET",
                slug: "GASKET"
            },
            {
                name: "GASKET",
                slug: "GASKET"
            },
            {
                name: "GEAR",
                slug: "GEAR"
            },
            {
                name: "GLASS",
                slug: "GLASS"
            },
            {
                name: "GLOW",
                slug: "GLOW"
            },
            {
                name: "GRID",
                slug: "GRID"
            },
            {
                name: "GRILL",
                slug: "GRILL"
            },
            {
                name: "GROMMET",
                slug: "GROMMET"
            },
            {
                name: "GUIDE",
                slug: "GUIDE"
            },
            {
                name: "HAND",
                slug: "HAND"
            },
            {
                name: "HARNESS",
                slug: "HARNESS"
            },
            {
                name: "HEAD",
                slug: "HEAD"
            },
            {
                name: "HEAT",
                slug: "HEAT"
            },
            {
                name: "HIGH PRESSURE",
                slug: "HIGH-PRESSURE"
            },
            {
                name: "HINGE",
                slug: "HINGE"
            },
            {
                name: "HOLDER",
                slug: "HOLDER"
            },
            {
                name: "HOOD",
                slug: "HOOD"
            },
            {
                name: "HOOK",
                slug: "HOOK"
            },
            {
                name: "HORN",
                slug: "HORN"
            },
            {
                name: "HOSE",
                slug: "HOSE"
            },
            {
                name: "HOUSING",
                slug: "HOUSING"
            },
            {
                name: "HUB",
                slug: "HUB"
            },
            {
                name: "HYDRAULIC",
                slug: "HYDRAULIC"
            },
        ]
    },

    {
        name: 'JOINT & KEY & LAMP',
        slug: 'JOINT-KEY-LAMP',
        image: '/images/categories/JOINT-KEY-LAMP.jpg',
        items: 106,
        children: [
            {
                name: "JOINT",
                slug: "JOINT"
            },
            {
                name: "KEY",
                slug: "KEY"
            },
            {
                name: "KIT",
                slug: "KIT"
            },
            {
                name: "KNOB",
                slug: "KNOB"
            },
            {
                name: "KNUCKLE",
                slug: "KNUCKLE"
            },
            {
                name: "LAMP",
                slug: "LAMP"
            },
            {
                name: "LATCH",
                slug: "LATCH"
            },
            {
                name: "LATERAL",
                slug: "LATERAL"
            },
            {
                name: "LENS & BODY",
                slug: "LENS-&-BODY"
            },
            {
                name: "LEVER",
                slug: "LEVER"
            },
            {
                name: "LIGHT",
                slug: "LIGHT"
            },
            {
                name: "LINE",
                slug: "LINE"
            },
            {
                name: "LINK",
                slug: "LINK"
            },
            {
                name: "LOCK",
                slug: "LOCK"
            },
            {
                name: "LOGO",
                slug: "LOGO"
            },
            {
                name: "LOWER",
                slug: "LOWER"
            }
        ]
    },
    {
        name: 'NOZZLE & OIL',
        slug: 'NOZZLE-OIL',
        image: '/images/categories/NOZZLE-OIL.jpg',
        items: 106,
        children: [
            {
                name: "NAME PLATE",
                slug: "NAME-PLATE"
            },
            {
                name: "NOZZLE",
                slug: "NOZZLE"
            },
            {
                name: "NUMBER PLATE",
                slug: "NUMBER-PLATE"
            },
            {
                name: "NUT",
                slug: "NUT"
            },
            {
                name: "O - RING",
                slug: "O---RING"
            },
            {
                name: "OIL",
                slug: "OIL"
            },
            {
                name: "OIL ASSY",
                slug: "OIL-ASSY"
            },
            {
                name: "OIL CAP",
                slug: "OIL-CAP"
            },
            {
                name: "OIL COOLER",
                slug: "OIL-COOLER"
            },
            {
                name: "ORNAMENTAL",
                slug: "ORNAMENTAL"
            },
            {
                name: "OTHERS",
                slug: "OTHERS"
            },
        ]
    }
    ,
    {
        name: 'PANEL & RADIATOR ',
        slug: 'IDLER',
        image: '/images/categories/PANEL-RADIATOR.jpg',
        items: 106,
        children: [
            {
                name: "PANEL",
                slug: "PANEL"
            },
            {
                name: "PIECE",
                slug: "PIECE"
            },
            {
                name: "PIN",
                slug: "PIN"
            },
            {
                name: "PIPE",
                slug: "PIPE"
            },
            {
                name: "PISTON",
                slug: "PISTON"
            },
            {
                name: "PLATE",
                slug: "PLATE"
            },
            {
                name: "PLUG",
                slug: "PLUG"
            },
            {
                name: "POWER",
                slug: "POWER"
            },
            {
                name: "PRESSURE",
                slug: "PRESSURE"
            },
            {
                name: "PROTECTOR",
                slug: "PROTECTOR"
            },
            {
                name: "PULLEY",
                slug: "PULLEY"
            },
            {
                name: "PULLY",
                slug: "PULLY"
            },
            {
                name: "PUMP",
                slug: "PUMP"
            },
            {
                name: "RACK",
                slug: "RACK"
            },
            {
                name: "RADIATOR",
                slug: "RADIATOR"
            },
            {
                name: "RAIL",
                slug: "RAIL"
            },
            {
                name: "REAR",
                slug: "REAR"
            },
            {
                name: "REFLECTOR",
                slug: "REFLECTOR"
            },
            {
                name: "REGISTER",
                slug: "REGISTER"
            },
            {
                name: "REGULATOR",
                slug: "REGULATOR"
            },
            {
                name: "REINFORCEMENT",
                slug: "REINFORCEMENT"
            },
            {
                name: "RELAY",
                slug: "RELAY"
            },
            {
                name: "RELEY",
                slug: "RELEY"
            },
            {
                name: "REPAIR KIT",
                slug: "REPAIR-KIT"
            },
            {
                name: "RESERVOIR",
                slug: "RESERVOIR"
            },
            {
                name: "RESISTOR",
                slug: "RESISTOR"
            },
            {
                name: "RETAINER",
                slug: "RETAINER"
            },
            {
                name: "RING",
                slug: "RING"
            },
            {
                name: "RIVET",
                slug: "RIVET"
            },
            {
                name: "ROD",
                slug: "ROD"
            },
            {
                name: "ROLLER",
                slug: "ROLLER"
            },
            {
                name: "ROOF",
                slug: "ROOF"
            },
            {
                name: "ROTOR",
                slug: "ROTOR"
            },
            {
                name: "RUBBER",
                slug: "RUBBER"
            },
        ]
    },
    {
        name: 'SPARK PLUG ',
        slug: 'SPARK-PLUG',
        image: '/images/categories/SPARK-PLUG.jpg',
        items: 106,
        children: [
            {
                name: "SEAL",
                slug: "SEAL"
            },
            {
                name: "SEALING",
                slug: "SEALING"
            },
            {
                name: "SEAT",
                slug: "SEAT"
            },
            {
                name: "SENDER",
                slug: "SENDER"
            },
            {
                name: "SENSOR",
                slug: "SENSOR"
            },
            {
                name: "SHAFT",
                slug: "SHAFT"
            },
            {
                name: "SHIELD",
                slug: "SHIELD"
            },
            {
                name: "SHOCK",
                slug: "SHOCK"
            },
            {
                name: "SIDE",
                slug: "SIDE"
            },
            {
                name: "SILICON",
                slug: "SILICON"
            },
            {
                name: "SLEEVE",
                slug: "SLEEVE"
            },
            {
                name: "SLIDE",
                slug: "SLIDE"
            },
            {
                name: "SOCKET",
                slug: "SOCKET"
            },
            {
                name: "SOLENOID",
                slug: "SOLENOID"
            },
            {
                name: "SPACER",
                slug: "SPACER"
            },
            {
                name: "SPARK PLUG",
                slug: "SPARK-PLUG"
            },
            {
                name: "SPEAKER",
                slug: "SPEAKER"
            },
            {
                name: "SPINDLE",
                slug: "SPINDLE"
            },
            {
                name: "SPOILER",
                slug: "SPOILER"
            },
            {
                name: "SPRAY NOZZLE",
                slug: "SPRAY-NOZZLE"
            },
            {
                name: "SPRING",
                slug: "SPRING"
            },
            {
                name: "SPROCKET",
                slug: "SPROCKET"
            },
            {
                name: "SPROCKET",
                slug: "SPROCKET"
            },
            {
                name: "ST.LINK",
                slug: "ST.LINK"
            },
            {
                name: "STAB LINK",
                slug: "STAB-LINK"
            },
            {
                name: "STABILIZER",
                slug: "STABILIZER"
            },
            {
                name: "STARTER",
                slug: "STARTER"
            },
            {
                name: "STB LINK",
                slug: "STB-LINK"
            },
            {
                name: "STEARING",
                slug: "STEARING"
            },
            {
                name: "STEERING",
                slug: "STEERING"
            },
            {
                name: "STICKER",
                slug: "STICKER"
            },
            {
                name: "STOP",
                slug: "STOP"
            },
            {
                name: "STRIP",
                slug: "STRIP"
            },
            {
                name: "STRUT",
                slug: "STRUT"
            },
            {
                name: "STUD",
                slug: "STUD"
            },
            {
                name: "SUCTION",
                slug: "SUCTION"
            },
            {
                name: "SUN",
                slug: "SUN"
            },
            {
                name: "SUPPORT",
                slug: "SUPPORT"
            },
            {
                name: "SUSPENSION",
                slug: "SUSPENSION"
            },
            {
                name: "SWITCH",
                slug: "SWITCH"
            }
        ]
    },



    {
        name: 'UPPER ARM && VACCUM && WASHER',
        slug: 'UPPER-ARM-&&-VACCUM-&&-WASHER',
        image: '/images/categories/UPPER-ARM-VACCUM-WASHER.png',
        items: 106,
        children: [
            {
                name: "UPPER ARM",
                slug: "UPPER-ARM"
            },
            {
                name: "VACCUM",
                slug: "VACCUM"
            },
            {
                name: "VALVE",
                slug: "VALVE"
            },
            {
                name: "V-BELT",
                slug: "V-BELT"
            },
            {
                name: "VENT",
                slug: "VENT"
            },
            {
                name: "VIBRATION",
                slug: "VIBRATION"
            },
            {
                name: "VOLTAGE",
                slug: "VOLTAGE"
            },
            {
                name: "WASHER",
                slug: "WASHER"
            },
            {
                name: "WATER PUMP",
                slug: "WATER-PUMP"
            },
            {
                name: "WEATER STRIPE",
                slug: "WEATER-STRIPE"
            },
            {
                name: "WHEEL",
                slug: "WHEEL"
            },
            {
                name: "WIND",
                slug: "WIND"
            },
            {
                name: "WINDOW",
                slug: "WINDOW"
            },
            {
                name: "WINDSHIELD",
                slug: "WINDSHIELD"
            },
            {
                name: "WIPER",
                slug: "WIPER"
            },
            {
                name: "WIRE",
                slug: "WIRE"
            },
            {
                name: "WIRING",
                slug: "WIRING"
            },
            {
                name: "WISH BONE",
                slug: "WISH-BONE"
            }
        ]
    }
];

const blogCategoriesDef: ICategoryDef[] = [
    {
        name: 'Latest News',
        slug: 'latest-news',
    },
    {
        name: 'Special Offers',
        slug: 'special-offers',
        children: [
            {
                name: 'Spring Sales',
                slug: 'spring-sales',
            },
            {
                name: 'Summer Sales',
                slug: 'summer-sales',
            },
            {
                name: 'Autumn Sales',
                slug: 'autumn-sales',
            },
            {
                name: 'Christmas Sales',
                slug: 'christmas-sales',
            },
            {
                name: 'Other Sales',
                slug: 'other-sales',
            },
        ],
    },
    {
        name: 'New Arrivals',
        slug: 'new-arrivals',
    },
    {
        name: 'Reviews',
        slug: 'reviews',
    },
    {
        name: 'Wheels & Tires',
        slug: 'wheels-tires',
    },
    {
        name: 'Engine & Drivetrain',
        slug: 'engine-drivetrain',
    },
    {
        name: 'Transmission',
        slug: 'transmission',
    },
    {
        name: 'Performance',
        slug: 'performance',
    },
];

export const shopCategoriesTree: IShopCategory[] = makeCategories(makeShopCategory, shopCategoriesDef);

export const shopCategoriesList: IShopCategory[] = flatTree(shopCategoriesTree);

export const blogCategoriesTree: IBlogCategory[] = makeCategories(makeBlogCategory, blogCategoriesDef);

export const blogCategoriesList: IBlogCategory[] = flatTree(blogCategoriesTree);
