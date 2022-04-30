// application
import { IVehicle } from '~/interfaces/vehicle';
import { makeIdGenerator } from '~/fake-server/utils';
import { IVehicleDef } from '~/fake-server/interfaces/vehicle-def';
import { IBrandDef } from '~/fake-server/interfaces/Brand-def';
import { IManufatureDef } from '../interfaces/Manufature-def';

const getNextId = makeIdGenerator();

function makeVehicles(defs: IVehicleDef[]): IVehicle[] {
    const newVehicles: IVehicle[] = [];
    defs.map((def) => {
        const range = typeof def.year === 'number' ? [def.year, def.year] : def.year;
        const years = [];

        for (let i = range[0]; i <= range[1]; i += 1) {
            years.push(i);
        }

        return years.map((year) => {
            Brands.map((brand) => {
                Manufatures.map((manufatures) => {
                    partsBrand.map((partsBrand) => {
                        newVehicles.push({
                            id: getNextId(),
                            year,
                            make: brand.idname,
                            makeCode: brand.id,
                            model: manufatures.label,
                            modelCode: manufatures.value,
                            engine: partsBrand.label,
                            engineCode: partsBrand.value
                        });
                        return true;
                    });
                    return true;
                });
                return true;
            });

            return true;
        });
    });
    return newVehicles;
}
const Brands: IBrandDef[] = [
    {
        "id": "ASTON",
        "idname": "ASTON",
        "imagename": "ASTON.png",
        "imagepath": "https://autopartsemirates.com/PortalImages/BrandsOrigins/ASTON.png"
    },
    {
        "id": "AU",
        "idname": "AUDI",
        "imagename": "AUDI.png",
        "imagepath": "https://autopartsemirates.com/PortalImages/BrandsOrigins/AUDI.png"
    },
    {
        "id": "BENTLEY",
        "idname": "BENTLEY",
        "imagename": "BENTLEY.png",
        "imagepath": "https://autopartsemirates.com/PortalImages/BrandsOrigins/BENTLEY.png"
    },
    {
        "id": "BM",
        "idname": "BMW",
        "imagename": "BMW.png",
        "imagepath": "https://autopartsemirates.com/PortalImages/BrandsOrigins/BMW.png"
    },
    {
        "id": "CADILLIC",
        "idname": "CADILLIC",
        "imagename": "CADILLAC.png",
        "imagepath": "https://autopartsemirates.com/PortalImages/BrandsOrigins/CADILLAC.png"
    },
    {
        "id": "CH",
        "idname": "CHEVROLET",
        "imagename": "CHEVROLET.png",
        "imagepath": "https://autopartsemirates.com/PortalImages/BrandsOrigins/CHEVROLET.png"
    },
    {
        "id": "FR",
        "idname": "FERRARI",
        "imagename": "FERRARI.png",
        "imagepath": "https://autopartsemirates.com/PortalImages/BrandsOrigins/FERRARI.png"
    },
    {
        "id": "FD",
        "idname": "FORD",
        "imagename": "FORD.png",
        "imagepath": "https://autopartsemirates.com/PortalImages/BrandsOrigins/FORD.png"
    },
    {
        "id": "G.M.C",
        "idname": "G.M.C",
        "imagename": "GMC.png",
        "imagepath": "https://autopartsemirates.com/PortalImages/BrandsOrigins/GMC.png"
    },
    {
        "id": "JAGUAR",
        "idname": "JAGUAR",
        "imagename": "JAGUAR.png",
        "imagepath": "https://autopartsemirates.com/PortalImages/BrandsOrigins/JAGUAR.png"
    },
    {
        "id": "JP",
        "idname": "JEEP",
        "imagename": "JEEP.png",
        "imagepath": "https://autopartsemirates.com/PortalImages/BrandsOrigins/JEEP.png"
    },
    {
        "id": "LR",
        "idname": "LAND ROVER",
        "imagename": "LAND ROVER.png",
        "imagepath": "https://autopartsemirates.com/PortalImages/BrandsOrigins/LAND ROVER.png"
    },
    {
        "id": "MAS",
        "idname": "MASERATI",
        "imagename": "MASERATI.png",
        "imagepath": "https://autopartsemirates.com/PortalImages/BrandsOrigins/MASERATI.png"
    },
    {
        "id": "MB",
        "idname": "MERCEDES BENZ",
        "imagename": "MERCEDES.png",
        "imagepath": "https://autopartsemirates.com/PortalImages/BrandsOrigins/MERCEDES.png"
    },
    {
        "id": "MS",
        "idname": "MITSUBISHI",
        "imagename": "MITSUBISHI.png",
        "imagepath": "https://autopartsemirates.com/PortalImages/BrandsOrigins/MITSUBISHI.png"
    },
    {
        "id": "NS",
        "idname": "NISSAN",
        "imagename": "NISSAN.png",
        "imagepath": "https://autopartsemirates.com/PortalImages/BrandsOrigins/NISSAN.png"
    },
    {
        "id": "PO",
        "idname": "PORSCHE",
        "imagename": "PORSCHE.png",
        "imagepath": "https://autopartsemirates.com/PortalImages/BrandsOrigins/PORSCHE.png"
    },
    {
        "id": "TY",
        "idname": "TOYOTA",
        "imagename": "TOYOTA.png",
        "imagepath": "https://autopartsemirates.com/PortalImages/BrandsOrigins/TOYOTA.png"
    },
    {
        "id": "VW",
        "idname": "VOLKS WAGON",
        "imagename": "VOLKSWAGEN.jpg",
        "imagepath": "https://autopartsemirates.com/PortalImages/BrandsOrigins/VOLKSWAGEN.jpg"
    }
];

const Manufatures: IManufatureDef[] = [
    {
        "value": "A/C",
        "label": "A/C"
    },
    {
        "value": "ABSORBER",
        "label": "ABSORBER"
    },
    {
        "value": "AC ASSY",
        "label": "AC ASSY"
    },
    {
        "value": "AC BELT",
        "label": "AC BELT"
    },
    {
        "value": "AC BLOWER",
        "label": "AC BLOWER"
    },
    {
        "value": "AC BLOWER MOTOR",
        "label": "AC BLOWER MOTOR"
    },
    {
        "value": "AC COMPRESSOR",
        "label": "AC COMPRESSOR"
    },
    {
        "value": "AC CONDENSER",
        "label": "AC CONDENSER"
    },
    {
        "value": "AC DRIER",
        "label": "AC DRIER"
    },
    {
        "value": "AC FAN",
        "label": "AC FAN"
    },
    {
        "value": "ACCELERATOR",
        "label": "ACCELERATOR"
    },
    {
        "value": "ACCUMUALTOR",
        "label": "ACCUMUALTOR"
    },
    {
        "value": "ACTUATOR",
        "label": "ACTUATOR"
    },
    {
        "value": "ADAPTER",
        "label": "ADAPTER"
    },
    {
        "value": "ADDITIONAL",
        "label": "ADDITIONAL"
    },
    {
        "value": "ADJUSTER",
        "label": "ADJUSTER"
    },
    {
        "value": "AIR",
        "label": "AIR"
    },
    {
        "value": "ALTERNATOR",
        "label": "ALTERNATOR"
    },
    {
        "value": "ALTERNATOR ",
        "label": "ALTERNATOR "
    },
    {
        "value": "AMPLIFIER",
        "label": "AMPLIFIER"
    },
    {
        "value": "ANTENNA",
        "label": "ANTENNA"
    },
    {
        "value": "ANTI FREEZE",
        "label": "ANTI FREEZE"
    },
    {
        "value": "ARM",
        "label": "ARM"
    },
    {
        "value": "ASA BOLT",
        "label": "ASA BOLT"
    },
    {
        "value": "ASA SCREW",
        "label": "ASA SCREW"
    },
    {
        "value": "ASA-BOLT",
        "label": "ASA-BOLT"
    },
    {
        "value": "ASHTRAY",
        "label": "ASHTRAY"
    },
    {
        "value": "ATF",
        "label": "ATF"
    },
    {
        "value": "AUDIO",
        "label": "AUDIO"
    },
    {
        "value": "AUXILARY",
        "label": "AUXILARY"
    },
    {
        "value": "AXLE",
        "label": "AXLE"
    },
    {
        "value": "BADGE",
        "label": "BADGE"
    },
    {
        "value": "BAFFLE",
        "label": "BAFFLE"
    },
    {
        "value": "BALL",
        "label": "BALL"
    },
    {
        "value": "BALL JOINT",
        "label": "BALL JOINT"
    },
    {
        "value": "BAR",
        "label": "BAR"
    },
    {
        "value": "BASE",
        "label": "BASE"
    },
    {
        "value": "BASIC",
        "label": "BASIC"
    },
    {
        "value": "BATTERY",
        "label": "BATTERY"
    },
    {
        "value": "BAZEL",
        "label": "BAZEL"
    },
    {
        "value": "BEAM",
        "label": "BEAM"
    },
    {
        "value": "BEARING",
        "label": "BEARING"
    },
    {
        "value": "BELLOWS",
        "label": "BELLOWS"
    },
    {
        "value": "BELT",
        "label": "BELT"
    },
    {
        "value": "BLADE",
        "label": "BLADE"
    },
    {
        "value": "BLINKER",
        "label": "BLINKER"
    },
    {
        "value": "BLOWER",
        "label": "BLOWER"
    },
    {
        "value": "BODY",
        "label": "BODY"
    },
    {
        "value": "BOLT",
        "label": "BOLT"
    },
    {
        "value": "BONET",
        "label": "BONET"
    },
    {
        "value": "BOOT",
        "label": "BOOT"
    },
    {
        "value": "BOWDEN CABLE",
        "label": "BOWDEN CABLE"
    },
    {
        "value": "BRACKET",
        "label": "BRACKET"
    },
    {
        "value": "BRAKE",
        "label": "BRAKE"
    },
    {
        "value": "BRAKE PAD",
        "label": "BRAKE PAD"
    },
    {
        "value": "BREATHER",
        "label": "BREATHER"
    },
    {
        "value": "BRG",
        "label": "BRG"
    },
    {
        "value": "BUFFER",
        "label": "BUFFER"
    },
    {
        "value": "BULB",
        "label": "BULB"
    },
    {
        "value": "BUMPER",
        "label": "BUMPER"
    },
    {
        "value": "BUSH",
        "label": "BUSH"
    },
    {
        "value": "CABLE",
        "label": "CABLE"
    },
    {
        "value": "CALIPER",
        "label": "CALIPER"
    },
    {
        "value": "CAMERA",
        "label": "CAMERA"
    },
    {
        "value": "CAP",
        "label": "CAP"
    },
    {
        "value": "CARRIER",
        "label": "CARRIER"
    },
    {
        "value": "CASE",
        "label": "CASE"
    },
    {
        "value": "CATALYST CONVERTER",
        "label": "CATALYST CONVERTER"
    },
    {
        "value": "CATCH",
        "label": "CATCH"
    },
    {
        "value": "CENTER",
        "label": "CENTER"
    },
    {
        "value": "CHAIN",
        "label": "CHAIN"
    },
    {
        "value": "CHANNEL",
        "label": "CHANNEL"
    },
    {
        "value": "CHARGE",
        "label": "CHARGE"
    },
    {
        "value": "CHASSIS",
        "label": "CHASSIS"
    },
    {
        "value": "CHECK ASSY",
        "label": "CHECK ASSY"
    },
    {
        "value": "CHROME",
        "label": "CHROME"
    },
    {
        "value": "CLAMP ",
        "label": "CLAMP "
    },
    {
        "value": "CLIP",
        "label": "CLIP"
    },
    {
        "value": "CLUTCH",
        "label": "CLUTCH"
    },
    {
        "value": "CLY ASSY",
        "label": "CLY ASSY"
    },
    {
        "value": "COIL",
        "label": "COIL"
    },
    {
        "value": "COMBI SWITCH",
        "label": "COMBI SWITCH"
    },
    {
        "value": "COMBINATION",
        "label": "COMBINATION"
    },
    {
        "value": "COMPRESSION",
        "label": "COMPRESSION"
    },
    {
        "value": "COMPRESSOR",
        "label": "COMPRESSOR"
    },
    {
        "value": "COMPUTER",
        "label": "COMPUTER"
    },
    {
        "value": "CONDENSER ",
        "label": "CONDENSER "
    },
    {
        "value": "CONNECTING",
        "label": "CONNECTING"
    },
    {
        "value": "CONNECTOR",
        "label": "CONNECTOR"
    },
    {
        "value": "CONSOLE",
        "label": "CONSOLE"
    },
    {
        "value": "CONTACT",
        "label": "CONTACT"
    },
    {
        "value": "CONTROL",
        "label": "CONTROL"
    },
    {
        "value": "CONVERTER",
        "label": "CONVERTER"
    },
    {
        "value": "COOLANT",
        "label": "COOLANT"
    },
    {
        "value": "COOLENT",
        "label": "COOLENT"
    },
    {
        "value": "COOLER",
        "label": "COOLER"
    },
    {
        "value": "COOLING",
        "label": "COOLING"
    },
    {
        "value": "COUPLING",
        "label": "COUPLING"
    },
    {
        "value": "COVER",
        "label": "COVER"
    },
    {
        "value": "CRANK",
        "label": "CRANK"
    },
    {
        "value": "CROSS",
        "label": "CROSS"
    },
    {
        "value": "CUP",
        "label": "CUP"
    },
    {
        "value": "CUSHION",
        "label": "CUSHION"
    },
    {
        "value": "CUT BUSH",
        "label": "CUT BUSH"
    },
    {
        "value": "CV JOINT",
        "label": "CV JOINT"
    },
    {
        "value": "CYLENDER",
        "label": "CYLENDER"
    },
    {
        "value": "CYLINDER",
        "label": "CYLINDER"
    },
    {
        "value": "DAMPER",
        "label": "DAMPER"
    },
    {
        "value": "DASHBOARD",
        "label": "DASHBOARD"
    },
    {
        "value": "DEFLECTION",
        "label": "DEFLECTION"
    },
    {
        "value": "DEFLECTOR",
        "label": "DEFLECTOR"
    },
    {
        "value": "DELIVERY UNIT",
        "label": "DELIVERY UNIT"
    },
    {
        "value": "DICKY",
        "label": "DICKY"
    },
    {
        "value": "DISC",
        "label": "DISC"
    },
    {
        "value": "DISTRIBUTION",
        "label": "DISTRIBUTION"
    },
    {
        "value": "DME",
        "label": "DME"
    },
    {
        "value": "DOOR",
        "label": "DOOR"
    },
    {
        "value": "DOWEL",
        "label": "DOWEL"
    },
    {
        "value": "DRIER",
        "label": "DRIER"
    },
    {
        "value": "DRIVE",
        "label": "DRIVE"
    },
    {
        "value": "DRUM",
        "label": "DRUM"
    },
    {
        "value": "ECU",
        "label": "ECU"
    },
    {
        "value": "ELECTRICAL",
        "label": "ELECTRICAL"
    },
    {
        "value": "ELEMENT",
        "label": "ELEMENT"
    },
    {
        "value": "EMBLEM",
        "label": "EMBLEM"
    },
    {
        "value": "END",
        "label": "END"
    },
    {
        "value": "ENGINE",
        "label": "ENGINE"
    },
    {
        "value": "EVAPORATOR",
        "label": "EVAPORATOR"
    },
    {
        "value": "EXHAUST",
        "label": "EXHAUST"
    },
    {
        "value": "EXPANSION",
        "label": "EXPANSION"
    },
    {
        "value": "EXTENSION",
        "label": "EXTENSION"
    },
    {
        "value": "FAN",
        "label": "FAN"
    },
    {
        "value": "FASTENER",
        "label": "FASTENER"
    },
    {
        "value": "FENDER",
        "label": "FENDER"
    },
    {
        "value": "FIILTER",
        "label": "FIILTER"
    },
    {
        "value": "FILLER CAP",
        "label": "FILLER CAP"
    },
    {
        "value": "FILLER FLAP",
        "label": "FILLER FLAP"
    },
    {
        "value": "FILLER NECK",
        "label": "FILLER NECK"
    },
    {
        "value": "FILLER PIPE",
        "label": "FILLER PIPE"
    },
    {
        "value": "FILLER PIPE WASH CONTAINER",
        "label": "FILLER PIPE WASH CONTAINER"
    },
    {
        "value": "FILLER SUB ASSY",
        "label": "FILLER SUB ASSY"
    },
    {
        "value": "FILL-IN FLAP",
        "label": "FILL-IN FLAP"
    },
    {
        "value": "FILLISTER",
        "label": "FILLISTER"
    },
    {
        "value": "FILM",
        "label": "FILM"
    },
    {
        "value": "FILTER",
        "label": "FILTER"
    },
    {
        "value": "FINISHER",
        "label": "FINISHER"
    },
    {
        "value": "FITTING",
        "label": "FITTING"
    },
    {
        "value": "FLANGE",
        "label": "FLANGE"
    },
    {
        "value": "FLAP",
        "label": "FLAP"
    },
    {
        "value": "FLOOR",
        "label": "FLOOR"
    },
    {
        "value": "FOG",
        "label": "FOG"
    },
    {
        "value": "FRAME",
        "label": "FRAME"
    },
    {
        "value": "FRONR",
        "label": "FRONR"
    },
    {
        "value": "FRONT",
        "label": "FRONT"
    },
    {
        "value": "FUEL",
        "label": "FUEL"
    },
    {
        "value": "FUNNEL",
        "label": "FUNNEL"
    },
    {
        "value": "FUSE",
        "label": "FUSE"
    },
    {
        "value": "GASKET",
        "label": "GASKET"
    },
    {
        "value": "GASKET",
        "label": "GASKET"
    },
    {
        "value": "GEAR",
        "label": "GEAR"
    },
    {
        "value": "GLASS",
        "label": "GLASS"
    },
    {
        "value": "GLOW",
        "label": "GLOW"
    },
    {
        "value": "GRID",
        "label": "GRID"
    },
    {
        "value": "GRILL",
        "label": "GRILL"
    },
    {
        "value": "GROMMET",
        "label": "GROMMET"
    },
    {
        "value": "GUIDE",
        "label": "GUIDE"
    },
    {
        "value": "HAND",
        "label": "HAND"
    },
    {
        "value": "HARNESS",
        "label": "HARNESS"
    },
    {
        "value": "HEAD",
        "label": "HEAD"
    },
    {
        "value": "HEAT",
        "label": "HEAT"
    },
    {
        "value": "HIGH PRESSURE",
        "label": "HIGH PRESSURE"
    },
    {
        "value": "HINGE",
        "label": "HINGE"
    },
    {
        "value": "HOLDER",
        "label": "HOLDER"
    },
    {
        "value": "HOOD",
        "label": "HOOD"
    },
    {
        "value": "HOOK",
        "label": "HOOK"
    },
    {
        "value": "HORN",
        "label": "HORN"
    },
    {
        "value": "HOSE",
        "label": "HOSE"
    },
    {
        "value": "HOUSING",
        "label": "HOUSING"
    },
    {
        "value": "HUB",
        "label": "HUB"
    },
    {
        "value": "HYDRAULIC",
        "label": "HYDRAULIC"
    },
    {
        "value": "IDLER",
        "label": "IDLER"
    },
    {
        "value": "IGNITION",
        "label": "IGNITION"
    },
    {
        "value": "INDICATOR",
        "label": "INDICATOR"
    },
    {
        "value": "INJECTOR",
        "label": "INJECTOR"
    },
    {
        "value": "INSERT",
        "label": "INSERT"
    },
    {
        "value": "INSTRUMENT",
        "label": "INSTRUMENT"
    },
    {
        "value": "INSULATOR",
        "label": "INSULATOR"
    },
    {
        "value": "INTAKE",
        "label": "INTAKE"
    },
    {
        "value": "INTERIOR",
        "label": "INTERIOR"
    },
    {
        "value": "JOINT",
        "label": "JOINT"
    },
    {
        "value": "KEY",
        "label": "KEY"
    },
    {
        "value": "KIT",
        "label": "KIT"
    },
    {
        "value": "KNOB",
        "label": "KNOB"
    },
    {
        "value": "KNUCKLE",
        "label": "KNUCKLE"
    },
    {
        "value": "LAMP",
        "label": "LAMP"
    },
    {
        "value": "LATCH",
        "label": "LATCH"
    },
    {
        "value": "LATERAL",
        "label": "LATERAL"
    },
    {
        "value": "LENS & BODY",
        "label": "LENS & BODY"
    },
    {
        "value": "LEVER",
        "label": "LEVER"
    },
    {
        "value": "LIGHT",
        "label": "LIGHT"
    },
    {
        "value": "LINE",
        "label": "LINE"
    },
    {
        "value": "LINK",
        "label": "LINK"
    },
    {
        "value": "LOCK",
        "label": "LOCK"
    },
    {
        "value": "LOGO",
        "label": "LOGO"
    },
    {
        "value": "LOWER",
        "label": "LOWER"
    },
    {
        "value": "MASTER",
        "label": "MASTER"
    },
    {
        "value": "MECHATRONIC",
        "label": "MECHATRONIC"
    },
    {
        "value": "MIRROR",
        "label": "MIRROR"
    },
    {
        "value": "MODULE",
        "label": "MODULE"
    },
    {
        "value": "MOLDING",
        "label": "MOLDING"
    },
    {
        "value": "MOTOR",
        "label": "MOTOR"
    },
    {
        "value": "MOUDLING",
        "label": "MOUDLING"
    },
    {
        "value": "MOULDING",
        "label": "MOULDING"
    },
    {
        "value": "MOUNT",
        "label": "MOUNT"
    },
    {
        "value": "MOUNTING",
        "label": "MOUNTING"
    },
    {
        "value": "MUD",
        "label": "MUD"
    },
    {
        "value": "MULTIRIB",
        "label": "MULTIRIB"
    },
    {
        "value": "NAME PLATE",
        "label": "NAME PLATE"
    },
    {
        "value": "NOZZLE",
        "label": "NOZZLE"
    },
    {
        "value": "NUMBER PLATE",
        "label": "NUMBER PLATE"
    },
    {
        "value": "NUT",
        "label": "NUT"
    },
    {
        "value": "O - RING",
        "label": "O - RING"
    },
    {
        "value": "OIL",
        "label": "OIL"
    },
    {
        "value": "OIL ASSY",
        "label": "OIL ASSY"
    },
    {
        "value": "OIL CAP",
        "label": "OIL CAP"
    },
    {
        "value": "OIL COOLER",
        "label": "OIL COOLER"
    },
    {
        "value": "ORNAMENTAL",
        "label": "ORNAMENTAL"
    },
    {
        "value": "OTHERS",
        "label": "OTHERS"
    },
    {
        "value": "PAD",
        "label": "PAD"
    },
    {
        "value": "PANEL",
        "label": "PANEL"
    },
    {
        "value": "PIECE",
        "label": "PIECE"
    },
    {
        "value": "PIN",
        "label": "PIN"
    },
    {
        "value": "PIPE",
        "label": "PIPE"
    },
    {
        "value": "PISTON",
        "label": "PISTON"
    },
    {
        "value": "PLATE",
        "label": "PLATE"
    },
    {
        "value": "PLUG",
        "label": "PLUG"
    },
    {
        "value": "POWER",
        "label": "POWER"
    },
    {
        "value": "PRESSURE",
        "label": "PRESSURE"
    },
    {
        "value": "PROTECTOR",
        "label": "PROTECTOR"
    },
    {
        "value": "PULLEY",
        "label": "PULLEY"
    },
    {
        "value": "PULLY",
        "label": "PULLY"
    },
    {
        "value": "PUMP",
        "label": "PUMP"
    },
    {
        "value": "RACK",
        "label": "RACK"
    },
    {
        "value": "RADIATOR",
        "label": "RADIATOR"
    },
    {
        "value": "RAIL",
        "label": "RAIL"
    },
    {
        "value": "REAR",
        "label": "REAR"
    },
    {
        "value": "REFLECTOR",
        "label": "REFLECTOR"
    },
    {
        "value": "REGISTER",
        "label": "REGISTER"
    },
    {
        "value": "REGULATOR",
        "label": "REGULATOR"
    },
    {
        "value": "REINFORCEMENT",
        "label": "REINFORCEMENT"
    },
    {
        "value": "RELAY",
        "label": "RELAY"
    },
    {
        "value": "RELEY",
        "label": "RELEY"
    },
    {
        "value": "REPAIR KIT",
        "label": "REPAIR KIT"
    },
    {
        "value": "RESERVOIR",
        "label": "RESERVOIR"
    },
    {
        "value": "RESISTOR",
        "label": "RESISTOR"
    },
    {
        "value": "RETAINER",
        "label": "RETAINER"
    },
    {
        "value": "RING",
        "label": "RING"
    },
    {
        "value": "RIVET",
        "label": "RIVET"
    },
    {
        "value": "ROD",
        "label": "ROD"
    },
    {
        "value": "ROLLER",
        "label": "ROLLER"
    },
    {
        "value": "ROOF",
        "label": "ROOF"
    },
    {
        "value": "ROTOR",
        "label": "ROTOR"
    },
    {
        "value": "RUBBER",
        "label": "RUBBER"
    },
    {
        "value": "SCREW",
        "label": "SCREW"
    },
    {
        "value": "SEAL",
        "label": "SEAL"
    },
    {
        "value": "SEALING",
        "label": "SEALING"
    },
    {
        "value": "SEAT",
        "label": "SEAT"
    },
    {
        "value": "SENDER",
        "label": "SENDER"
    },
    {
        "value": "SENSOR",
        "label": "SENSOR"
    },
    {
        "value": "SHAFT",
        "label": "SHAFT"
    },
    {
        "value": "SHIELD",
        "label": "SHIELD"
    },
    {
        "value": "SHOCK",
        "label": "SHOCK"
    },
    {
        "value": "SIDE",
        "label": "SIDE"
    },
    {
        "value": "SILICON",
        "label": "SILICON"
    },
    {
        "value": "SLEEVE",
        "label": "SLEEVE"
    },
    {
        "value": "SLIDE",
        "label": "SLIDE"
    },
    {
        "value": "SOCKET",
        "label": "SOCKET"
    },
    {
        "value": "SOLENOID",
        "label": "SOLENOID"
    },
    {
        "value": "SPACER",
        "label": "SPACER"
    },
    {
        "value": "SPARK PLUG",
        "label": "SPARK PLUG"
    },
    {
        "value": "SPEAKER",
        "label": "SPEAKER"
    },
    {
        "value": "SPINDLE",
        "label": "SPINDLE"
    },
    {
        "value": "SPOILER",
        "label": "SPOILER"
    },
    {
        "value": "SPRAY NOZZLE",
        "label": "SPRAY NOZZLE"
    },
    {
        "value": "SPRING",
        "label": "SPRING"
    },
    {
        "value": "SPROCKET",
        "label": "SPROCKET"
    },
    {
        "value": "SPROCKET",
        "label": "SPROCKET"
    },
    {
        "value": "ST.LINK",
        "label": "ST.LINK"
    },
    {
        "value": "STAB LINK",
        "label": "STAB LINK"
    },
    {
        "value": "STABILIZER",
        "label": "STABILIZER"
    },
    {
        "value": "STARTER",
        "label": "STARTER"
    },
    {
        "value": "STB LINK",
        "label": "STB LINK"
    },
    {
        "value": "STEARING",
        "label": "STEARING"
    },
    {
        "value": "STEERING",
        "label": "STEERING"
    },
    {
        "value": "STICKER",
        "label": "STICKER"
    },
    {
        "value": "STOP",
        "label": "STOP"
    },
    {
        "value": "STRIP",
        "label": "STRIP"
    },
    {
        "value": "STRUT",
        "label": "STRUT"
    },
    {
        "value": "STUD",
        "label": "STUD"
    },
    {
        "value": "SUCTION",
        "label": "SUCTION"
    },
    {
        "value": "SUN",
        "label": "SUN"
    },
    {
        "value": "SUPPORT",
        "label": "SUPPORT"
    },
    {
        "value": "SUSPENSION",
        "label": "SUSPENSION"
    },
    {
        "value": "SWITCH",
        "label": "SWITCH"
    },
    {
        "value": "TANK",
        "label": "TANK"
    },
    {
        "value": "TENSIONER",
        "label": "TENSIONER"
    },
    {
        "value": "THERMOSTAT",
        "label": "THERMOSTAT"
    },
    {
        "value": "THERMOSTAT AND HOUSING",
        "label": "THERMOSTAT AND HOUSING"
    },
    {
        "value": "THROTTLE",
        "label": "THROTTLE"
    },
    {
        "value": "THRUST",
        "label": "THRUST"
    },
    {
        "value": "TIE ROD",
        "label": "TIE ROD"
    },
    {
        "value": "TIMING",
        "label": "TIMING"
    },
    {
        "value": "TIMING CHAIN",
        "label": "TIMING CHAIN"
    },
    {
        "value": "TIRROD",
        "label": "TIRROD"
    },
    {
        "value": "TRACK ROD",
        "label": "TRACK ROD"
    },
    {
        "value": "TRANSMISSION",
        "label": "TRANSMISSION"
    },
    {
        "value": "TRIM",
        "label": "TRIM"
    },
    {
        "value": "TRUNK",
        "label": "TRUNK"
    },
    {
        "value": "TUBE",
        "label": "TUBE"
    },
    {
        "value": "TURBO",
        "label": "TURBO"
    },
    {
        "value": "TURN",
        "label": "TURN"
    },
    {
        "value": "TYPE",
        "label": "TYPE"
    },
    {
        "value": "TYRE",
        "label": "TYRE"
    },
    {
        "value": "TYRE LINER",
        "label": "TYRE LINER"
    },
    {
        "value": "UPPER ARM",
        "label": "UPPER ARM"
    },
    {
        "value": "VACCUM",
        "label": "VACCUM"
    },
    {
        "value": "VALVE",
        "label": "VALVE"
    },
    {
        "value": "V-BELT",
        "label": "V-BELT"
    },
    {
        "value": "VENT",
        "label": "VENT"
    },
    {
        "value": "VIBRATION",
        "label": "VIBRATION"
    },
    {
        "value": "VOLTAGE",
        "label": "VOLTAGE"
    },
    {
        "value": "WASHER",
        "label": "WASHER"
    },
    {
        "value": "WATER PUMP",
        "label": "WATER PUMP"
    },
    {
        "value": "WEATER STRIPE",
        "label": "WEATER STRIPE"
    },
    {
        "value": "WHEEL",
        "label": "WHEEL"
    },
    {
        "value": "WIND",
        "label": "WIND"
    },
    {
        "value": "WINDOW",
        "label": "WINDOW"
    },
    {
        "value": "WINDSHIELD",
        "label": "WINDSHIELD"
    },
    {
        "value": "WIPER",
        "label": "WIPER"
    },
    {
        "value": "WIRE",
        "label": "WIRE"
    },
    {
        "value": "WIRING",
        "label": "WIRING"
    },
    {
        "value": "WISH BONE",
        "label": "WISH BONE"
    }
];

const partsBrand: IManufatureDef[] = [{ "value": "ACDELCO", "label": "ACDELCO" }, { "value": "ADNOC", "label": "ADNOC" }, { "value": "AIR", "label": "AIR TEX" }, { "value": "ALL", "label": "ALLMAKES 4X4" }, { "value": "ATC", "label": "ATC" }, { "value": "AST", "label": "AUTOSTAR" }, { "value": "BHR", "label": "BEHR" }, { "value": "BER", "label": "BERU" }, { "value": "BLN", "label": "BILSTIEN" }, { "value": "BLP", "label": "BLUE PRINT" }, { "value": "BOG", "label": "BOGE" }, { "value": "BORG", "label": "BORG WARNER" }, { "value": "BSH", "label": "BOSCH" }, { "value": "BREMBO", "label": "BREMBO" }, { "value": "BMI", "label": "BREMI" }, { "value": "BRIT", "label": "BRITPART" }, { "value": "CAL", "label": "CALTEX" }, { "value": "CAS", "label": "CASTROL" }, { "value": "CHAM", "label": "CHAMPION" }, { "value": "CHI", "label": "CHINA" }, { "value": "CON", "label": "CONTI" }, { "value": "COR", "label": "CORTECO" }, { "value": "COUNTY", "label": "COUNTY" }, { "value": "DAY", "label": "DAYCO" }, { "value": "DELPHI", "label": "DELPHI" }, { "value": "DSO", "label": "DENSO" }, { "value": "DPS", "label": "DPS" }, { "value": "DLP", "label": "DUNLOP" }, { "value": "ELF", "label": "ELFOTECH" }, { "value": "ELR", "label": "ELRING" }, { "value": "EURO", "label": "EURO" }, { "value": "FTE", "label": "FAG" }, { "value": "FBI", "label": "FEBI" }, { "value": "FER", "label": "FERRADO" }, { "value": "FERRARI", "label": "FERRARI" }, { "value": "FJ", "label": "FJ TECH" }, { "value": "GAR", "label": "GARRETT" }, { "value": "GER", "label": "GERMANY" }, { "value": "GKN", "label": "GKN" }, { "value": "GLY", "label": "GLYCO" }, { "value": "GMB", "label": "GMB" }, { "value": "GMC", "label": "GMC" }, { "value": "GTZ", "label": "GOETZE" }, { "value": "GLF", "label": "GULF" }, { "value": "HAS", "label": "HASTINGS" }, { "value": "HLA", "label": "HELLA" }, { "value": "HST", "label": "HENGST" }, { "value": "HIT", "label": "HITACHI" }, { "value": "INCOE", "label": "INCOE" }, { "value": "IVECO", "label": "IVECO" }, { "value": "IWS", "label": "IWIS" }, { "value": "JAPAN", "label": "JAPAN" }, { "value": "KDR", "label": "KDR" }, { "value": "KOYO", "label": "KOYO" }, { "value": "KS", "label": "KS" }, { "value": "LEM", "label": "LEMFORDER" }, { "value": "LIQUI", "label": "LIQUI MOLY" }, { "value": "LUK", "label": "LUK" }, { "value": "MM", "label": "MAGNET MARELLI" }, { "value": "MHF", "label": "MAHLE" }, { "value": "MAN", "label": "MAN" }, { "value": "MXP", "label": "MAXPART" }, { "value": "MAYER", "label": "MAYER" }, { "value": "MEY", "label": "MEYLE" }, { "value": "MOB", "label": "MOBIL 1" }, { "value": "MOBIS", "label": "MOBIS" }, { "value": "NGK", "label": "NGK" }, { "value": "NIS", "label": "NISSENS" }, { "value": "OEM", "label": "OEM" }, { "value": "OE", "label": "ORIGINAL" }, { "value": "OSR", "label": "OSRAM" }, { "value": "PBG", "label": "PIERBURG" }, { "value": "PIR", "label": "PIRELLI" }, { "value": "PST", "label": "PRESTONE" }, { "value": "RECONDITION", "label": "RECONDITION" }, { "value": "REM", "label": "REMSA" }, { "value": "RM", "label": "RHEINMANN" }, { "value": "SCH", "label": "SACHS" }, { "value": "SAN", "label": "SANDEN" }, { "value": "SF", "label": "SF" }, { "value": "SL", "label": "SHELL" }, { "value": "SIM", "label": "SIMMER" }, { "value": "SKF", "label": "SKF" }, { "value": "SPX", "label": "SPARX" }, { "value": "STB", "label": "STABILUS" }, { "value": "SPG", "label": "SUPER GRIP" }, { "value": "SW", "label": "SWEDEN" }, { "value": "TWN", "label": "TAIWAN" }, { "value": "TEX", "label": "TEXTAR" }, { "value": "TDR", "label": "TOPDRIVE" }, { "value": "TTC", "label": "TRUCKTEC" }, { "value": "TRW", "label": "TRW" }, { "value": "TKY", "label": "TURKEY" }, { "value": "UK", "label": "U.K" }, { "value": "U.S.A", "label": "U.S.A" }, { "value": "USD", "label": "USED" }, { "value": "VKO", "label": "VAICO" }, { "value": "VAL", "label": "VALEO" }, { "value": "VAR", "label": "VARTA" }, { "value": "VDO", "label": "VDO" }, { "value": "RNZ", "label": "VICTOR REINZ" }, { "value": "WAB", "label": "WABCO" }, { "value": "WAH", "label": "WAHLER" }, { "value": "ZF", "label": "ZF" }, { "value": "ZIM", "label": "ZIMMERMANN" }];

const vehiclesDef: IVehicleDef[] = [

    {
        year: [2008, 2020],
        make: 'Lexus',
        model: 'LS460',
        engine: '4.6L 4608CC V8 FI',
    },


];


export const vehicles: IVehicle[] = makeVehicles(vehiclesDef);

export const userVehicles: IVehicle[] = vehicles.slice(0, 3);
