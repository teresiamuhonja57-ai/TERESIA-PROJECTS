import pyowm
from pyowm.owm import OWM
from pyowm.utils.config import get_default_config
from datetime import datetime
import pytz
import matplotlib.pyplot as plt
config_dict = get_default_config()
config_dict['language'] = 'en'

API_KEY = "YOUR_API_KEY_HERE"  # Replace with your OpenWeatherMap API key
owm = OWM(API_KEY, config_dict)
mgr = owm.weather_manager()
def get_weather_by_city(city_name):
    observation = mgr.weather_at_place(city_name)
    weather = observation.weather

    temp = weather.temperature('celsius')['temp']
    wind = weather.wind()  # returns {'speed': X, 'deg': Y}
    sunrise = weather.sunrise_time(timeformat='date')  # datetime object
    sunset = weather.sunset_time(timeformat='date')

    print(f"Weather in {city_name}:")
    print(f"Temperature: {temp}°C")
    print(f"Wind: {wind['speed']} m/s, direction {wind['deg']}°")
    print(f"Sunrise: {sunrise.strftime('%H:%M:%S')}")
    print(f"Sunset: {sunset.strftime('%H:%M:%S')}\n")

    return weather
city = input("Enter the city (e.g., Paris, FR): ")
weather = get_weather_by_city(city)
def get_forecast(city_name):
    forecast = mgr.forecast_at_place(city_name, '3h')
    print(f"Weather forecast for {city_name} (next 5 days, every 3 hours):")
    for weather in forecast.forecast:
        time = weather.reference_time('date')
        temp = weather.temperature('celsius')['temp']
        print(f"{time.strftime('%Y-%m-%d %H:%M')} -> Temp: {temp}°C, Status: {weather.status}")
        def get_air_pollution(lat, lon):
            air_data = mgr.airpollution_at_coords(lat, lon)
        print("\nAir Pollution Data:")
        print(f"CO: {air_data.co}")
        print(f"NO: {air_data.no}")
        print(f"NO2: {air_data.no2}")
        print(f"O3: {air_data.o3}")
print(f"SO2: {air_data.so2}")
print(f"PM2.5: {air_data.pm2_5}")
print(f"PM10: {air_data.pm10}")
print(f"NH3: {air_data.nh3}")
def init_plot(title="Humidity Forecast", ylabel="% Humidity"):
    fig, ax = plt.subplots(figsize=(10, 5))
    ax.set_title(title)
    ax.set_ylabel(ylabel)
    return fig, ax
def plot_humidity(humidities, times, ax):
    bars = ax.bar(times, humidities, color='skyblue')
    return bars
def write_humidity_on_bar_chart(bars, ax):
    for bar in bars:
        height = bar.get_height()
        ax.text(bar.get_x() + bar.get_width()/2, height + 1, f'{int(height)}%', ha='center', va='bottom')
        def get_three_day_humidity(city_name):
                             forecast = mgr.forecast_at_place(city_name, '3h')
    humidities = []
    times = []

    now = datetime.now(pytz.utc)
    end_time = now + timedelta(days=3)

    for weather in forecast.forecast:
        if weather.reference_time('date') <= end_time:
            humidities.append(weather.humidity)
            times.append(weather.reference_time('date').strftime('%d %H:%M'))

    return humidities, times
def display_humidity_chart(city_name):
    humidities, times = get_three_day_humidity(city_name)
    fig, ax = init_plot(title=f"3-Day Humidity Forecast - {city_name}")

    bars = plot_humidity(humidities, times, ax)
    write_humidity_on_bar_chart(bars, ax)

    plt.xticks(rotation=45)
    plt.tight_layout()
    plt.show()
    city = input("Enter the city (e.g., Paris, FR): ")
weather = get_weather_by_city(city)
display_humidity_chart(city)