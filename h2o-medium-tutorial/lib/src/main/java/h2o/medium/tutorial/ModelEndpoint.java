/**
 * 
 */
package h2o.medium.tutorial;

import com.google.gson.JsonObject;

import hex.genmodel.easy.RowData;
import io.javalin.Javalin;

/**
 * @author sm
 *
 */
public final class ModelEndpoint {

	public static Integer port = 8080;
	public static String modelPath = "src/main/resources/GBM_model_python_1632315299562_4.zip";

	/**
	 * @param args
	 * @throws Exception
	 */
	public static void main(String[] args) throws Exception {
		H2OModel model = new H2OModel(modelPath);
		Javalin endpoint = Javalin.create().start(port);
		endpoint.get("/predict", ctx -> {
			RowData modelParams = new RowData();
			ctx.queryParamMap().forEach((param, value) -> {
				modelParams.put(param, value.get(0));
			});
			double prediction = model.predict(modelParams);
			JsonObject resp = new JsonObject();
			resp.addProperty("prediction", prediction);
			resp.addProperty("status", "ok");
			ctx.result(resp.toString());
		});
	}

}
