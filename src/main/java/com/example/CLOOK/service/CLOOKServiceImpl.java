package com.example.CLOOK.service;

import java.io.IOException;
import java.util.List;

import org.json.simple.JSONObject;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import lombok.Setter;
import lombok.extern.log4j.Log4j;

import com.example.CLOOK.dao.AirRepsitory;
import com.example.CLOOK.dao.GeocodingRepsitory;
import com.example.CLOOK.dao.WeatherRepsitory;
import com.example.CLOOK.dao.SearchRepsitory;
import com.example.CLOOK.dao.SunRepsitory;
import com.example.CLOOK.dao.UVRepsitory;
import com.example.CLOOK.dao.UVRepsitory_copy;
import com.example.CLOOK.domain.AirVO;
import com.example.CLOOK.domain.GeocodingVO;
import com.example.CLOOK.domain.SunVO;
import com.example.CLOOK.domain.UvVO;
import com.example.CLOOK.domain.WeatherVO;
import com.example.CLOOK.service.CLOOKService;


@Service
public class CLOOKServiceImpl implements CLOOKService{

    WeatherVO weatherVO = new WeatherVO();


    @Override
	public List<String> location(String address) throws IOException, ParseException {

        System.out.println("location_serviceImpl:::------------------------------");

        return SearchRepsitory.getLocation(address);

	}
    
    @Override
	public GeocodingVO gecodingnxny(String address) {

        System.out.println("geocodingnxny_serviceImpl:::------------------------------");

        GeocodingVO vo = GeocodingRepsitory.getData(address);

        System.out.println(vo);

        return GeocodingRepsitory.changData(vo);

	}

    @Override
    public List<WeatherVO> getweatherclothes(GeocodingVO gecoding) throws IOException, ParseException, java.text.ParseException {
        
        System.out.println("geocoding_serviceImpl:::------------------------------");

        return WeatherRepsitory.getShortWeather4(gecoding);
    }

    @Override
    public List<WeatherVO> getweathertoday(GeocodingVO gecoding) throws IOException, ParseException, java.text.ParseException {
        
        System.out.println("geocoding_serviceImpl:::------------------------------");

        return WeatherRepsitory.getShortWeather5(gecoding);
    }

    @Override
    public WeatherVO getpartweather1(GeocodingVO gecoding) throws IOException, ParseException, java.text.ParseException {
        System.out.println("geocoding_serviceImpl:::------------------------------");

        return WeatherRepsitory.getShortPartWeather1(gecoding);
    }

    @Override
    public WeatherVO getpartweather2(GeocodingVO gecoding) throws IOException, ParseException, java.text.ParseException {
        System.out.println("geocoding_serviceImpl:::------------------------------");

        return WeatherRepsitory.getShortPartWeather2(gecoding);
    }

    @Override
    public List<AirVO> getair(String stationName) throws IOException, ParseException {
        System.out.println("geocoding_serviceImpl:::------------------------------");

        return AirRepsitory.getAir(stationName);
    }

    @Override
    public List<UvVO> getUv() throws IOException, ParseException {

        return UVRepsitory.getUV();
    }

    @Override
    public List<SunVO> getsun() throws IOException, ParseException {
        return SunRepsitory.getSun();
    }

    @Override
    public JSONObject getweather2(GeocodingVO gecoding) throws IOException, ParseException {

        return WeatherRepsitory.getShortWeather2(gecoding);
    }
    
    @Override
    public String getweather3(GeocodingVO gecoding) throws IOException, ParseException {

        return WeatherRepsitory.getShortWeather3(gecoding);
    }

    @Override
    public String getUv_copy() throws IOException, ParseException {
        return UVRepsitory_copy.getUV();
    }

    @Override
    public WeatherVO getpartweather3(GeocodingVO gecoding)
            throws IOException, ParseException, java.text.ParseException {
        // TODO Auto-generated method stub
        return WeatherRepsitory.getShortPartWeather6(gecoding);
    }

}
