export class Post {
	loveIts : number = 0;;
	created_at : Date = new Date();

	constructor(public title: string, public content: string){}
}