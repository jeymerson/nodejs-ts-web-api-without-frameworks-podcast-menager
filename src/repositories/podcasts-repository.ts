import fs from "fs"
import path from "path"
import { PodcastsModel } from "../models/podcast-model";

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcast = async (podcastName?: string): Promise <PodcastsModel[]> => {
    const language = "utf-8"
    const rawdata = fs.readFileSync(pathData, language)
    let jsonFile = JSON.parse(rawdata)

    if(podcastName){
        jsonFile = jsonFile.filter((podcast: PodcastsModel) => podcast.podcastName == podcastName);
    }
    return jsonFile;
}