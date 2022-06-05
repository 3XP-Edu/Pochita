
const path = require("path");
const fs = require("fs");
const basename = path.basename(__filename);

let routes: any = {};

fs.readdirSync(__dirname).filter((file_path:string) => {
 const current_path = fs.lstatSync(`${__dirname}/${file_path}`);
  
 if(current_path.isDirectory())
	fs.readdirSync(`${__dirname}/${file_path}`)
        .filter((router_file: string) => {
          return (
            router_file.indexOf(".") !== 0 &&
            router_file !== basename &&
            router_file.slice(-3) === ".ts"
          );
        }).forEach((file: string) => {
		const route = require(path.join(`${__dirname}/${file_path}`, file));
		let route_name = new route.default().endpoint.replace("/", "");
		 routes[route_name] = {
			 router: new route.default().router,
			 endpoint: new route.default().endpoint,
          	};
	});
});

export default routes;
