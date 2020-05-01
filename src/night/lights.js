import {addToNiDrawList} from '../game-integration/loaders'
import {coordsToId} from '../utility-functions'

const LIGHT_TYPE_SIZES = {S: '64px', M: '96px', L: '160px', XL: '192px'}

function getLightTypeUrl(lightType)
{
    return FILE_PREFIX + 'res/img/night-lights/' + lightType + '.png'
}

function getLightNiObject(img, x, y)
{
    return {
        draw: function (e)
        {
            e.drawImage(img, x - Engine.map.offset[0], y - Engine.map.offset[1])
        },
        getOrder: function ()
        {
            return 1000 // Lights always on top
        },
        update: function () {}
    }
}

function addLights(lights)
{
    for (const i in lights)
    {
        if (INTERFACE === 'NI')
        {
            const image = new Image()
            image.onload = addToNiDrawList.bind(
                null,
                getLightNiObject(image, lights[i].x, lights[i].y),
                coordsToId(lights[i].x, lights[i].y)
            )
            image.src = getLightTypeUrl(lights[i].type)
        }
        else
        {
            const lightTypeSize = LIGHT_TYPE_SIZES[lights[i].type]
            $('<div />')
                .css({
                    background: 'url(' + getLightTypeUrl(lights[i].type) + ')',
                    width: lightTypeSize,
                    height: lightTypeSize,
                    zIndex: map.y * 2 + 12,
                    position: 'absolute',
                    left: lights[i].x,
                    top: lights[i].y,
                    pointerEvents: 'none'
                })
                .addClass('nerthus__night-light')
                .attr('type', lights[i].type)
                .appendTo('#ground')
        }
    }
}

function resetLights()
{
    if (INTERFACE === 'SI')
        $('#ground .nerthus__night-light').remove()
}


export function turnLightsOn()
{
    if (INTERFACE === 'NI')
    {
        if (typeof Engine.map.d.id === 'undefined')
            setTimeout(turnLightsOn, 500)
        else
        {
            if (AVAILABLE_MAP_FILES.lights.includes(Engine.map.d.id)) //TODO don't repeat this long list
                $.getJSON(FILE_PREFIX + 'res/configs/night-lights/map_' + Engine.map.d.id + '.json', addLights)
            else console.log('lights not loaded - no file')
        }
    }
    else
    {
        resetLights()
        console.log('tried lights')
        if (AVAILABLE_MAP_FILES.lights.includes(map.id))
            $.getJSON(FILE_PREFIX + 'res/configs/night-lights/map_' + map.id + '.json', addLights)
        else console.log('lights not loaded - no file')
    }
}
