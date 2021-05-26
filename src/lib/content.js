import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content');

export function getContentData(dir) {
    const directory = path.join(contentDirectory, dir);
    const fileNames = fs.readdirSync(directory);
    const data = fileNames.map(fileName => {
        const id = fileName.replace(/\.md$/, '');

        const filePath = path.join(directory, fileName);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const matterResult = matter(fileContents);

        return {
            id, 
            ...matterResult.data
        }
    });
    // sort by date
    return data.sort((a, b) => {
        let aStartDate = new Date(a.startDate);
        let bStartDate = new Date(b.startDate);

        if (a.endDate === 'Present' && b.endDate === 'Present') {
            if (aStartDate < bStartDate) return 1;
            else return -1;
        } 
        else if (a.endDate === 'Present') return -1;
        else if (b.endDate === 'Present') return 1;
        else {
            let aEndDate = new Date(a.endDate);
            let bEndDate = new Date(b.endDate);
            if (aEndDate < bEndDate) return 1;
            else return -1;
        }
    });
}