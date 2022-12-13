import numpy as np

def wave_pattern_with_text():
    """ Prints a 1d acoustic wave in the free field as text art"""
    # Define the parameters of the wave
    c = 343.0 # speed of sound
    f = 1000.0 # frequency
    L = 1.0 # length of the wave
    x = np.linspace(0, L, 100) # x coordinates
    t = np.linspace(0, 1.0/f, 100) # time coordinates
    # Calculate the wave
    u = np.sin(2*np.pi*f*(x[:, np.newaxis] - c*t[np.newaxis, :]))
    # Print the wave
    for i in range(u.shape[1]):
        print("".join(["*" if np.abs(x) > 0.5 else " " for x in u[:, i]]))

def wave_pattern_with_text2():
    """ Prints a 2d pressure field of a bessel function as text art"""
    # Define the parameters of the wave
    x = np.linspace(-10, 10, 100) # x coordinates
    y = np.linspace(-10, 10, 100) # y coordinates
    # Calculate the wave
    u = np.sin(3*np.sqrt(x[:, np.newaxis]**2 + y[np.newaxis, :]**2))
    # Print the wave
    for i in range(u.shape[1]):
        print("".join(["ø" if np.abs(x) > 0.5 else " " for x in u[:, i]]))
if __name__ == '__main__':
    wave_pattern_with_text2()

