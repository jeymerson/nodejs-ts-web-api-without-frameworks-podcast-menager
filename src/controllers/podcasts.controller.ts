
import {IncomingMessage, ServerResponse} from 'http';
import {servicesListEpisodes} from '../services/list-episodes-service'
import { servicesFilterEpisodes } from '../services/filter-episodes-service';
import { ContentType } from '../utils/content-type';
import { PodcastTransferModel } from '../models/podcast-transfer-model';

const default_content = {'Content-Type': ContentType.JSON};

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    const content = await servicesListEpisodes();
    res.writeHead(content.statusCode,default_content);
    res.write(JSON.stringify(content))
    res.end();
};

export const getFilterEpisodes = async( req: IncomingMessage, res: ServerResponse) => {
    const content: PodcastTransferModel = await servicesFilterEpisodes (req.url);
    res.writeHead(content.statusCode,default_content);
    res.write(JSON.stringify(content.body))
    res.end();

};