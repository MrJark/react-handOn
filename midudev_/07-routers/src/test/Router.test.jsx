import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react'
import { Router } from '../Router';
import { getCurrentPath } from '../utils';
import { Route } from '../Route';
import { Link } from '../Link';


vi.mock('../utils.js', () => ({
    getCurrentPath: vi.fn()
}))

describe('Router', () => { 
    beforeEach( () => {
        cleanup();
        vi.clearAllMocks();
    })

    it('should work', () => {
        expect(1).toBe(1)
    })

    it('should render without problems', () => {
        render( <Router routes={[]}/>)
        expect(true).toBeTruthy();
    })

    it('should render404 if no routes match', () => {
        render( <Router routes={[]} defaultComponent={() => <h1>404</h1>}/>)
        expect(screen.getByText('404')).toBeTruthy()
    })

    it('should render the component of the first route taht matches', () => {
        getCurrentPath.mockReturnValue('/about')
        
        const routes = [
            {
                path: '/',
                Component: () => <h1>Home</h1>
            },
            {
                path: '/about',
                Component: () => <h1>About</h1>
            },
        ]

        render(<Router routes={routes}/>)
        expect( screen.getByText('About')).toBeTruthy()
    })

})